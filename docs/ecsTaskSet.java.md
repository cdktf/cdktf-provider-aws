# `ecsTaskSet` Submodule <a name="`ecsTaskSet` Submodule" id="@cdktf/provider-aws.ecsTaskSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskSet <a name="EcsTaskSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set aws_ecs_task_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSet;

EcsTaskSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .service(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<EcsTaskSetCapacityProviderStrategy>)
//  .externalId(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<EcsTaskSetLoadBalancer>)
//  .networkConfiguration(EcsTaskSetNetworkConfiguration)
//  .platformVersion(java.lang.String)
//  .scale(EcsTaskSetScale)
//  .serviceRegistries(EcsTaskSetServiceRegistries)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .waitUntilStable(java.lang.Boolean)
//  .waitUntilStable(IResolvable)
//  .waitUntilStableTimeout(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scale">scale</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | scale block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.waitUntilStable">waitUntilStable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.waitUntilStableTimeout">waitUntilStableTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.taskDefinition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.launchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.loadBalancer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer EcsTaskSet#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}.

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scale"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#scale EcsTaskSet#scale}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.serviceRegistries"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}.

---

##### `waitUntilStable`<sup>Optional</sup> <a name="waitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.waitUntilStable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}.

---

##### `waitUntilStableTimeout`<sup>Optional</sup> <a name="waitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.waitUntilStableTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale">putScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries">putServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetScale">resetScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetServiceRegistries">resetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStable">resetWaitUntilStable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStableTimeout">resetWaitUntilStableTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable OR java.util.List<EcsTaskSetCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer"></a>

```java
public void putLoadBalancer(IResolvable OR java.util.List<EcsTaskSetLoadBalancer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(EcsTaskSetNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `putScale` <a name="putScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale"></a>

```java
public void putScale(EcsTaskSetScale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `putServiceRegistries` <a name="putServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries"></a>

```java
public void putServiceRegistries(EcsTaskSetServiceRegistries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetId"></a>

```java
public void resetId()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetScale` <a name="resetScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetScale"></a>

```java
public void resetScale()
```

##### `resetServiceRegistries` <a name="resetServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetServiceRegistries"></a>

```java
public void resetServiceRegistries()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetWaitUntilStable` <a name="resetWaitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStable"></a>

```java
public void resetWaitUntilStable()
```

##### `resetWaitUntilStableTimeout` <a name="resetWaitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStableTimeout"></a>

```java
public void resetWaitUntilStableTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSet;

EcsTaskSet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSet;

EcsTaskSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSet;

EcsTaskSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList">EcsTaskSetLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference">EcsTaskSetServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.stabilityStatus">stabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskSetId">taskSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancerInput">loadBalancerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scaleInput">scaleInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput">serviceRegistriesInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableInput">waitUntilStableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeoutInput">waitUntilStableTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStable">waitUntilStable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeout">waitUntilStableTimeout</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy"></a>

```java
public EcsTaskSetCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancer"></a>

```java
public EcsTaskSetLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList">EcsTaskSetLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfiguration"></a>

```java
public EcsTaskSetNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a>

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scale"></a>

```java
public EcsTaskSetScaleOutputReference getScale();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a>

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistries"></a>

```java
public EcsTaskSetServiceRegistriesOutputReference getServiceRegistries();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference">EcsTaskSetServiceRegistriesOutputReference</a>

---

##### `stabilityStatus`<sup>Required</sup> <a name="stabilityStatus" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.stabilityStatus"></a>

```java
public java.lang.String getStabilityStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskSetId"></a>

```java
public java.lang.String getTaskSetId();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput"></a>

```java
public java.lang.Object getCapacityProviderStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancerInput"></a>

```java
public java.lang.Object getLoadBalancerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput"></a>

```java
public EcsTaskSetNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scaleInput"></a>

```java
public EcsTaskSetScale getScaleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceRegistriesInput`<sup>Optional</sup> <a name="serviceRegistriesInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput"></a>

```java
public EcsTaskSetServiceRegistries getServiceRegistriesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput"></a>

```java
public java.lang.String getTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `waitUntilStableInput`<sup>Optional</sup> <a name="waitUntilStableInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableInput"></a>

```java
public java.lang.Object getWaitUntilStableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitUntilStableTimeoutInput`<sup>Optional</sup> <a name="waitUntilStableTimeoutInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeoutInput"></a>

```java
public java.lang.String getWaitUntilStableTimeoutInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `waitUntilStable`<sup>Required</sup> <a name="waitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStable"></a>

```java
public java.lang.Object getWaitUntilStable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitUntilStableTimeout`<sup>Required</sup> <a name="waitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeout"></a>

```java
public java.lang.String getWaitUntilStableTimeout();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskSetCapacityProviderStrategy <a name="EcsTaskSetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetCapacityProviderStrategy;

EcsTaskSetCapacityProviderStrategy.builder()
    .capacityProvider(java.lang.String)
    .weight(java.lang.Number)
//  .base(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#weight EcsTaskSet#weight}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#base EcsTaskSet#base}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#weight EcsTaskSet#weight}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#base EcsTaskSet#base}.

---

### EcsTaskSetConfig <a name="EcsTaskSetConfig" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetConfig;

EcsTaskSetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .service(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<EcsTaskSetCapacityProviderStrategy>)
//  .externalId(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<EcsTaskSetLoadBalancer>)
//  .networkConfiguration(EcsTaskSetNetworkConfiguration)
//  .platformVersion(java.lang.String)
//  .scale(EcsTaskSetScale)
//  .serviceRegistries(EcsTaskSetServiceRegistries)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .waitUntilStable(java.lang.Boolean)
//  .waitUntilStable(IResolvable)
//  .waitUntilStableTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | scale block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStable">waitUntilStable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStableTimeout">waitUntilStableTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy"></a>

```java
public java.lang.Object getCapacityProviderStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.loadBalancer"></a>

```java
public java.lang.Object getLoadBalancer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer EcsTaskSet#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration"></a>

```java
public EcsTaskSetNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}.

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.scale"></a>

```java
public EcsTaskSetScale getScale();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#scale EcsTaskSet#scale}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries"></a>

```java
public EcsTaskSetServiceRegistries getServiceRegistries();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}.

---

##### `waitUntilStable`<sup>Optional</sup> <a name="waitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStable"></a>

```java
public java.lang.Object getWaitUntilStable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}.

---

##### `waitUntilStableTimeout`<sup>Optional</sup> <a name="waitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStableTimeout"></a>

```java
public java.lang.String getWaitUntilStableTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}.

---

### EcsTaskSetLoadBalancer <a name="EcsTaskSetLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetLoadBalancer;

EcsTaskSetLoadBalancer.builder()
    .containerName(java.lang.String)
//  .containerPort(java.lang.Number)
//  .loadBalancerName(java.lang.String)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer_name EcsTaskSet#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}.

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer_name EcsTaskSet#load_balancer_name}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}.

---

### EcsTaskSetNetworkConfiguration <a name="EcsTaskSetNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetNetworkConfiguration;

EcsTaskSetNetworkConfiguration.builder()
    .subnets(java.util.List<java.lang.String>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#subnets EcsTaskSet#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#security_groups EcsTaskSet#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#subnets EcsTaskSet#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#security_groups EcsTaskSet#security_groups}.

---

### EcsTaskSetScale <a name="EcsTaskSetScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetScale;

EcsTaskSetScale.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#unit EcsTaskSet#unit}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#value EcsTaskSet#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#unit EcsTaskSet#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#value EcsTaskSet#value}.

---

### EcsTaskSetServiceRegistries <a name="EcsTaskSetServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetServiceRegistries;

EcsTaskSetServiceRegistries.builder()
    .registryArn(java.lang.String)
//  .containerName(java.lang.String)
//  .containerPort(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#registry_arn EcsTaskSet#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#port EcsTaskSet#port}. |

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#registry_arn EcsTaskSet#registry_arn}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#port EcsTaskSet#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskSetCapacityProviderStrategyList <a name="EcsTaskSetCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetCapacityProviderStrategyList;

new EcsTaskSetCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get"></a>

```java
public EcsTaskSetCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---


### EcsTaskSetCapacityProviderStrategyOutputReference <a name="EcsTaskSetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetCapacityProviderStrategyOutputReference;

new EcsTaskSetCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsTaskSetLoadBalancerList <a name="EcsTaskSetLoadBalancerList" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetLoadBalancerList;

new EcsTaskSetLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get"></a>

```java
public EcsTaskSetLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>>

---


### EcsTaskSetLoadBalancerOutputReference <a name="EcsTaskSetLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetLoadBalancerOutputReference;

new EcsTaskSetLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetLoadBalancerName">resetLoadBalancerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetLoadBalancerName` <a name="resetLoadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetLoadBalancerName"></a>

```java
public void resetLoadBalancerName()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsTaskSetNetworkConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetNetworkConfigurationOutputReference;

new EcsTaskSetNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public EcsTaskSetNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---


### EcsTaskSetScaleOutputReference <a name="EcsTaskSetScaleOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetScaleOutputReference;

new EcsTaskSetScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue"></a>

```java
public EcsTaskSetScale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---


### EcsTaskSetServiceRegistriesOutputReference <a name="EcsTaskSetServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_task_set.EcsTaskSetServiceRegistriesOutputReference;

new EcsTaskSetServiceRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput">registryArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput"></a>

```java
public java.lang.String getRegistryArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue"></a>

```java
public EcsTaskSetServiceRegistries getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---



