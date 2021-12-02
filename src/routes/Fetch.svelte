<script lang="ts">
    import axios from "axios"
    let page : number = 1
    let limit : number = 10

    //$: items = fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then(response => response.json())
    $: items = axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then(response => response.data)

    function nextPage() {
        page = page + 1
    }
</script>


<div>

    { #await items }
        <p>Loading</p>
    {:then items }
    <ul>
        {#each items as item, index}
          <li class="m-14">
            <p>{index} [{item.id}] {item.title}</p>
          </li>
        {/each}
      </ul>    
    {:catch error}
        <p>오류가 발생했습니다.</p>
    {/await}  
</div>