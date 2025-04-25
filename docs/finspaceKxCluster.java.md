# `finspaceKxCluster` Submodule <a name="`finspaceKxCluster` Submodule" id="@cdktf/provider-aws.finspaceKxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxCluster <a name="FinspaceKxCluster" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxCluster;

FinspaceKxCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .azMode(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
    .releaseLabel(java.lang.String)
    .type(java.lang.String)
    .vpcConfiguration(FinspaceKxClusterVpcConfiguration)
//  .autoScalingConfiguration(FinspaceKxClusterAutoScalingConfiguration)
//  .availabilityZoneId(java.lang.String)
//  .cacheStorageConfigurations(IResolvable)
//  .cacheStorageConfigurations(java.util.List<FinspaceKxClusterCacheStorageConfigurations>)
//  .capacityConfiguration(FinspaceKxClusterCapacityConfiguration)
//  .code(FinspaceKxClusterCode)
//  .commandLineArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .database(IResolvable)
//  .database(java.util.List<FinspaceKxClusterDatabase>)
//  .description(java.lang.String)
//  .executionRole(java.lang.String)
//  .id(java.lang.String)
//  .initializationScript(java.lang.String)
//  .savedownStorageConfiguration(FinspaceKxClusterSavedownStorageConfiguration)
//  .scalingGroupConfiguration(FinspaceKxClusterScalingGroupConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tickerplantLogConfiguration(IResolvable)
//  .tickerplantLogConfiguration(java.util.List<FinspaceKxClusterTickerplantLogConfiguration>)
//  .timeouts(FinspaceKxClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.cacheStorageConfigurations">cacheStorageConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>></code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.commandLineArguments">commandLineArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.database">database</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>></code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.initializationScript">initializationScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.savedownStorageConfiguration">savedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scalingGroupConfiguration">scalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | scaling_group_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tickerplantLogConfiguration">tickerplantLogConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>></code> | tickerplant_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.azMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.releaseLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `autoScalingConfiguration`<sup>Optional</sup> <a name="autoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.autoScalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `cacheStorageConfigurations`<sup>Optional</sup> <a name="cacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.cacheStorageConfigurations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>>

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `capacityConfiguration`<sup>Optional</sup> <a name="capacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.capacityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.commandLineArguments"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.database"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.executionRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializationScript`<sup>Optional</sup> <a name="initializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.initializationScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `savedownStorageConfiguration`<sup>Optional</sup> <a name="savedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.savedownStorageConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `scalingGroupConfiguration`<sup>Optional</sup> <a name="scalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scalingGroupConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

scaling_group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `tickerplantLogConfiguration`<sup>Optional</sup> <a name="tickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tickerplantLogConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>>

tickerplant_log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration">putAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations">putCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration">putCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration">putSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration">putScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration">putTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration">resetAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations">resetCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration">resetCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript">resetInitializationScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration">resetSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration">resetScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration">resetTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScalingConfiguration` <a name="putAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration"></a>

```java
public void putAutoScalingConfiguration(FinspaceKxClusterAutoScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `putCacheStorageConfigurations` <a name="putCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations"></a>

```java
public void putCacheStorageConfigurations(IResolvable OR java.util.List<FinspaceKxClusterCacheStorageConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>>

---

##### `putCapacityConfiguration` <a name="putCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration"></a>

```java
public void putCapacityConfiguration(FinspaceKxClusterCapacityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `putCode` <a name="putCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode"></a>

```java
public void putCode(FinspaceKxClusterCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase"></a>

```java
public void putDatabase(IResolvable OR java.util.List<FinspaceKxClusterDatabase> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>>

---

##### `putSavedownStorageConfiguration` <a name="putSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration"></a>

```java
public void putSavedownStorageConfiguration(FinspaceKxClusterSavedownStorageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `putScalingGroupConfiguration` <a name="putScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration"></a>

```java
public void putScalingGroupConfiguration(FinspaceKxClusterScalingGroupConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `putTickerplantLogConfiguration` <a name="putTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration"></a>

```java
public void putTickerplantLogConfiguration(IResolvable OR java.util.List<FinspaceKxClusterTickerplantLogConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts"></a>

```java
public void putTimeouts(FinspaceKxClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(FinspaceKxClusterVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `resetAutoScalingConfiguration` <a name="resetAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration"></a>

```java
public void resetAutoScalingConfiguration()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetCacheStorageConfigurations` <a name="resetCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations"></a>

```java
public void resetCacheStorageConfigurations()
```

##### `resetCapacityConfiguration` <a name="resetCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration"></a>

```java
public void resetCapacityConfiguration()
```

##### `resetCode` <a name="resetCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode"></a>

```java
public void resetCode()
```

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments"></a>

```java
public void resetCommandLineArguments()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId"></a>

```java
public void resetId()
```

##### `resetInitializationScript` <a name="resetInitializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript"></a>

```java
public void resetInitializationScript()
```

##### `resetSavedownStorageConfiguration` <a name="resetSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration"></a>

```java
public void resetSavedownStorageConfiguration()
```

##### `resetScalingGroupConfiguration` <a name="resetScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration"></a>

```java
public void resetScalingGroupConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTickerplantLogConfiguration` <a name="resetTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration"></a>

```java
public void resetTickerplantLogConfiguration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxCluster;

FinspaceKxCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxCluster;

FinspaceKxCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxCluster;

FinspaceKxCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxCluster;

FinspaceKxCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FinspaceKxCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FinspaceKxCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FinspaceKxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations">cacheStorageConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration">savedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration">scalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration">tickerplantLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput">autoScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput">azModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput">cacheStorageConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput">capacityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput">codeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput">databaseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput">initializationScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput">releaseLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput">savedownStorageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput">scalingGroupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput">tickerplantLogConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode">azMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments">commandLineArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript">initializationScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoScalingConfiguration`<sup>Required</sup> <a name="autoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration"></a>

```java
public FinspaceKxClusterAutoScalingConfigurationOutputReference getAutoScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a>

---

##### `cacheStorageConfigurations`<sup>Required</sup> <a name="cacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations"></a>

```java
public FinspaceKxClusterCacheStorageConfigurationsList getCacheStorageConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a>

---

##### `capacityConfiguration`<sup>Required</sup> <a name="capacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration"></a>

```java
public FinspaceKxClusterCapacityConfigurationOutputReference getCapacityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code"></a>

```java
public FinspaceKxClusterCodeOutputReference getCode();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database"></a>

```java
public FinspaceKxClusterDatabaseList getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a>

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp"></a>

```java
public java.lang.String getLastModifiedTimestamp();
```

- *Type:* java.lang.String

---

##### `savedownStorageConfiguration`<sup>Required</sup> <a name="savedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration"></a>

```java
public FinspaceKxClusterSavedownStorageConfigurationOutputReference getSavedownStorageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a>

---

##### `scalingGroupConfiguration`<sup>Required</sup> <a name="scalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration"></a>

```java
public FinspaceKxClusterScalingGroupConfigurationOutputReference getScalingGroupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tickerplantLogConfiguration`<sup>Required</sup> <a name="tickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration"></a>

```java
public FinspaceKxClusterTickerplantLogConfigurationList getTickerplantLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts"></a>

```java
public FinspaceKxClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration"></a>

```java
public FinspaceKxClusterVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a>

---

##### `autoScalingConfigurationInput`<sup>Optional</sup> <a name="autoScalingConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput"></a>

```java
public FinspaceKxClusterAutoScalingConfiguration getAutoScalingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput"></a>

```java
public java.lang.String getAzModeInput();
```

- *Type:* java.lang.String

---

##### `cacheStorageConfigurationsInput`<sup>Optional</sup> <a name="cacheStorageConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput"></a>

```java
public java.lang.Object getCacheStorageConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>>

---

##### `capacityConfigurationInput`<sup>Optional</sup> <a name="capacityConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput"></a>

```java
public FinspaceKxClusterCapacityConfiguration getCapacityConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput"></a>

```java
public FinspaceKxClusterCode getCodeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommandLineArgumentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput"></a>

```java
public java.lang.Object getDatabaseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initializationScriptInput`<sup>Optional</sup> <a name="initializationScriptInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput"></a>

```java
public java.lang.String getInitializationScriptInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput"></a>

```java
public java.lang.String getReleaseLabelInput();
```

- *Type:* java.lang.String

---

##### `savedownStorageConfigurationInput`<sup>Optional</sup> <a name="savedownStorageConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput"></a>

```java
public FinspaceKxClusterSavedownStorageConfiguration getSavedownStorageConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `scalingGroupConfigurationInput`<sup>Optional</sup> <a name="scalingGroupConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput"></a>

```java
public FinspaceKxClusterScalingGroupConfiguration getScalingGroupConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tickerplantLogConfigurationInput`<sup>Optional</sup> <a name="tickerplantLogConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput"></a>

```java
public java.lang.Object getTickerplantLogConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput"></a>

```java
public FinspaceKxClusterVpcConfiguration getVpcConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommandLineArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initializationScript`<sup>Required</sup> <a name="initializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript"></a>

```java
public java.lang.String getInitializationScript();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxClusterAutoScalingConfiguration <a name="FinspaceKxClusterAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterAutoScalingConfiguration;

FinspaceKxClusterAutoScalingConfiguration.builder()
    .autoScalingMetric(java.lang.String)
    .maxNodeCount(java.lang.Number)
    .metricTarget(java.lang.Number)
    .minNodeCount(java.lang.Number)
    .scaleInCooldownSeconds(java.lang.Number)
    .scaleOutCooldownSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget">metricTarget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds">scaleInCooldownSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds">scaleOutCooldownSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}. |

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}.

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}.

---

##### `metricTarget`<sup>Required</sup> <a name="metricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget"></a>

```java
public java.lang.Number getMetricTarget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}.

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}.

---

##### `scaleInCooldownSeconds`<sup>Required</sup> <a name="scaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds"></a>

```java
public java.lang.Number getScaleInCooldownSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}.

---

##### `scaleOutCooldownSeconds`<sup>Required</sup> <a name="scaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds"></a>

```java
public java.lang.Number getScaleOutCooldownSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}.

---

### FinspaceKxClusterCacheStorageConfigurations <a name="FinspaceKxClusterCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCacheStorageConfigurations;

FinspaceKxClusterCacheStorageConfigurations.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

### FinspaceKxClusterCapacityConfiguration <a name="FinspaceKxClusterCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCapacityConfiguration;

FinspaceKxClusterCapacityConfiguration.builder()
    .nodeCount(java.lang.Number)
    .nodeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}. |

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}.

---

### FinspaceKxClusterCode <a name="FinspaceKxClusterCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCode;

FinspaceKxClusterCode.builder()
    .s3Bucket(java.lang.String)
    .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}.

---

### FinspaceKxClusterConfig <a name="FinspaceKxClusterConfig" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterConfig;

FinspaceKxClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .azMode(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
    .releaseLabel(java.lang.String)
    .type(java.lang.String)
    .vpcConfiguration(FinspaceKxClusterVpcConfiguration)
//  .autoScalingConfiguration(FinspaceKxClusterAutoScalingConfiguration)
//  .availabilityZoneId(java.lang.String)
//  .cacheStorageConfigurations(IResolvable)
//  .cacheStorageConfigurations(java.util.List<FinspaceKxClusterCacheStorageConfigurations>)
//  .capacityConfiguration(FinspaceKxClusterCapacityConfiguration)
//  .code(FinspaceKxClusterCode)
//  .commandLineArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .database(IResolvable)
//  .database(java.util.List<FinspaceKxClusterDatabase>)
//  .description(java.lang.String)
//  .executionRole(java.lang.String)
//  .id(java.lang.String)
//  .initializationScript(java.lang.String)
//  .savedownStorageConfiguration(FinspaceKxClusterSavedownStorageConfiguration)
//  .scalingGroupConfiguration(FinspaceKxClusterScalingGroupConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tickerplantLogConfiguration(IResolvable)
//  .tickerplantLogConfiguration(java.util.List<FinspaceKxClusterTickerplantLogConfiguration>)
//  .timeouts(FinspaceKxClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations">cacheStorageConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>></code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration">capacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments">commandLineArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database">database</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>></code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript">initializationScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration">savedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration">scalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | scaling_group_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration">tickerplantLogConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>></code> | tickerplant_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration"></a>

```java
public FinspaceKxClusterVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `autoScalingConfiguration`<sup>Optional</sup> <a name="autoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration"></a>

```java
public FinspaceKxClusterAutoScalingConfiguration getAutoScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `cacheStorageConfigurations`<sup>Optional</sup> <a name="cacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations"></a>

```java
public java.lang.Object getCacheStorageConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>>

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `capacityConfiguration`<sup>Optional</sup> <a name="capacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration"></a>

```java
public FinspaceKxClusterCapacityConfiguration getCapacityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code"></a>

```java
public FinspaceKxClusterCode getCode();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommandLineArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database"></a>

```java
public java.lang.Object getDatabase();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializationScript`<sup>Optional</sup> <a name="initializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript"></a>

```java
public java.lang.String getInitializationScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `savedownStorageConfiguration`<sup>Optional</sup> <a name="savedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration"></a>

```java
public FinspaceKxClusterSavedownStorageConfiguration getSavedownStorageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `scalingGroupConfiguration`<sup>Optional</sup> <a name="scalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration"></a>

```java
public FinspaceKxClusterScalingGroupConfiguration getScalingGroupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

scaling_group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `tickerplantLogConfiguration`<sup>Optional</sup> <a name="tickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration"></a>

```java
public java.lang.Object getTickerplantLogConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>>

tickerplant_log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts"></a>

```java
public FinspaceKxClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

### FinspaceKxClusterDatabase <a name="FinspaceKxClusterDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabase;

FinspaceKxClusterDatabase.builder()
    .databaseName(java.lang.String)
//  .cacheConfigurations(IResolvable)
//  .cacheConfigurations(java.util.List<FinspaceKxClusterDatabaseCacheConfigurations>)
//  .changesetId(java.lang.String)
//  .dataviewName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations">cacheConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>></code> | cache_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId">changesetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName">dataviewName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}.

---

##### `cacheConfigurations`<sup>Optional</sup> <a name="cacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations"></a>

```java
public java.lang.Object getCacheConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>>

cache_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}

---

##### `changesetId`<sup>Optional</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId"></a>

```java
public java.lang.String getChangesetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}.

---

##### `dataviewName`<sup>Optional</sup> <a name="dataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName"></a>

```java
public java.lang.String getDataviewName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}.

---

### FinspaceKxClusterDatabaseCacheConfigurations <a name="FinspaceKxClusterDatabaseCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabaseCacheConfigurations;

FinspaceKxClusterDatabaseCacheConfigurations.builder()
    .cacheType(java.lang.String)
//  .dbPaths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType">cacheType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths">dbPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}. |

---

##### `cacheType`<sup>Required</sup> <a name="cacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType"></a>

```java
public java.lang.String getCacheType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}.

---

##### `dbPaths`<sup>Optional</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths"></a>

```java
public java.util.List<java.lang.String> getDbPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}.

---

### FinspaceKxClusterSavedownStorageConfiguration <a name="FinspaceKxClusterSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterSavedownStorageConfiguration;

FinspaceKxClusterSavedownStorageConfiguration.builder()
//  .size(java.lang.Number)
//  .type(java.lang.String)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}.

---

### FinspaceKxClusterScalingGroupConfiguration <a name="FinspaceKxClusterScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterScalingGroupConfiguration;

FinspaceKxClusterScalingGroupConfiguration.builder()
    .memoryReservation(java.lang.Number)
    .nodeCount(java.lang.Number)
    .scalingGroupName(java.lang.String)
//  .cpu(java.lang.Number)
//  .memoryLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName">scalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}. |

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName"></a>

```java
public java.lang.String getScalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}.

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}.

---

### FinspaceKxClusterTickerplantLogConfiguration <a name="FinspaceKxClusterTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterTickerplantLogConfiguration;

FinspaceKxClusterTickerplantLogConfiguration.builder()
    .tickerplantLogVolumes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes">tickerplantLogVolumes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}. |

---

##### `tickerplantLogVolumes`<sup>Required</sup> <a name="tickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes"></a>

```java
public java.util.List<java.lang.String> getTickerplantLogVolumes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}.

---

### FinspaceKxClusterTimeouts <a name="FinspaceKxClusterTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterTimeouts;

FinspaceKxClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}.

---

### FinspaceKxClusterVpcConfiguration <a name="FinspaceKxClusterVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterVpcConfiguration;

FinspaceKxClusterVpcConfiguration.builder()
    .ipAddressType(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}. |

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxClusterAutoScalingConfigurationOutputReference <a name="FinspaceKxClusterAutoScalingConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterAutoScalingConfigurationOutputReference;

new FinspaceKxClusterAutoScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput">autoScalingMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput">metricTargetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput">scaleInCooldownSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput">scaleOutCooldownSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget">metricTarget</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds">scaleInCooldownSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds">scaleOutCooldownSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingMetricInput`<sup>Optional</sup> <a name="autoScalingMetricInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput"></a>

```java
public java.lang.String getAutoScalingMetricInput();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `metricTargetInput`<sup>Optional</sup> <a name="metricTargetInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput"></a>

```java
public java.lang.Number getMetricTargetInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `scaleInCooldownSecondsInput`<sup>Optional</sup> <a name="scaleInCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput"></a>

```java
public java.lang.Number getScaleInCooldownSecondsInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldownSecondsInput`<sup>Optional</sup> <a name="scaleOutCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput"></a>

```java
public java.lang.Number getScaleOutCooldownSecondsInput();
```

- *Type:* java.lang.Number

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `metricTarget`<sup>Required</sup> <a name="metricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget"></a>

```java
public java.lang.Number getMetricTarget();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `scaleInCooldownSeconds`<sup>Required</sup> <a name="scaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds"></a>

```java
public java.lang.Number getScaleInCooldownSeconds();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldownSeconds`<sup>Required</sup> <a name="scaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds"></a>

```java
public java.lang.Number getScaleOutCooldownSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterAutoScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---


### FinspaceKxClusterCacheStorageConfigurationsList <a name="FinspaceKxClusterCacheStorageConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCacheStorageConfigurationsList;

new FinspaceKxClusterCacheStorageConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get"></a>

```java
public FinspaceKxClusterCacheStorageConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>>

---


### FinspaceKxClusterCacheStorageConfigurationsOutputReference <a name="FinspaceKxClusterCacheStorageConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference;

new FinspaceKxClusterCacheStorageConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>

---


### FinspaceKxClusterCapacityConfigurationOutputReference <a name="FinspaceKxClusterCapacityConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCapacityConfigurationOutputReference;

new FinspaceKxClusterCapacityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterCapacityConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---


### FinspaceKxClusterCodeOutputReference <a name="FinspaceKxClusterCodeOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterCodeOutputReference;

new FinspaceKxClusterCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion"></a>

```java
public void resetS3ObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput"></a>

```java
public java.lang.String getS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterCode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---


### FinspaceKxClusterDatabaseCacheConfigurationsList <a name="FinspaceKxClusterDatabaseCacheConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabaseCacheConfigurationsList;

new FinspaceKxClusterDatabaseCacheConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get"></a>

```java
public FinspaceKxClusterDatabaseCacheConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>>

---


### FinspaceKxClusterDatabaseCacheConfigurationsOutputReference <a name="FinspaceKxClusterDatabaseCacheConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference;

new FinspaceKxClusterDatabaseCacheConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths">resetDbPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbPaths` <a name="resetDbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths"></a>

```java
public void resetDbPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput">cacheTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput">dbPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType">cacheType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths">dbPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheTypeInput`<sup>Optional</sup> <a name="cacheTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput"></a>

```java
public java.lang.String getCacheTypeInput();
```

- *Type:* java.lang.String

---

##### `dbPathsInput`<sup>Optional</sup> <a name="dbPathsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput"></a>

```java
public java.util.List<java.lang.String> getDbPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheType`<sup>Required</sup> <a name="cacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType"></a>

```java
public java.lang.String getCacheType();
```

- *Type:* java.lang.String

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths"></a>

```java
public java.util.List<java.lang.String> getDbPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>

---


### FinspaceKxClusterDatabaseList <a name="FinspaceKxClusterDatabaseList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabaseList;

new FinspaceKxClusterDatabaseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get"></a>

```java
public FinspaceKxClusterDatabaseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>>

---


### FinspaceKxClusterDatabaseOutputReference <a name="FinspaceKxClusterDatabaseOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterDatabaseOutputReference;

new FinspaceKxClusterDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations">putCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations">resetCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId">resetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName">resetDataviewName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheConfigurations` <a name="putCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations"></a>

```java
public void putCacheConfigurations(IResolvable OR java.util.List<FinspaceKxClusterDatabaseCacheConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>>

---

##### `resetCacheConfigurations` <a name="resetCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations"></a>

```java
public void resetCacheConfigurations()
```

##### `resetChangesetId` <a name="resetChangesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId"></a>

```java
public void resetChangesetId()
```

##### `resetDataviewName` <a name="resetDataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName"></a>

```java
public void resetDataviewName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations">cacheConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput">cacheConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput">changesetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput">dataviewNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId">changesetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName">dataviewName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheConfigurations`<sup>Required</sup> <a name="cacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations"></a>

```java
public FinspaceKxClusterDatabaseCacheConfigurationsList getCacheConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a>

---

##### `cacheConfigurationsInput`<sup>Optional</sup> <a name="cacheConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput"></a>

```java
public java.lang.Object getCacheConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>>

---

##### `changesetIdInput`<sup>Optional</sup> <a name="changesetIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput"></a>

```java
public java.lang.String getChangesetIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dataviewNameInput`<sup>Optional</sup> <a name="dataviewNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput"></a>

```java
public java.lang.String getDataviewNameInput();
```

- *Type:* java.lang.String

---

##### `changesetId`<sup>Required</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId"></a>

```java
public java.lang.String getChangesetId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dataviewName`<sup>Required</sup> <a name="dataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName"></a>

```java
public java.lang.String getDataviewName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>

---


### FinspaceKxClusterSavedownStorageConfigurationOutputReference <a name="FinspaceKxClusterSavedownStorageConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference;

new FinspaceKxClusterSavedownStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterSavedownStorageConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---


### FinspaceKxClusterScalingGroupConfigurationOutputReference <a name="FinspaceKxClusterScalingGroupConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterScalingGroupConfigurationOutputReference;

new FinspaceKxClusterScalingGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput">scalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName">scalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `scalingGroupNameInput`<sup>Optional</sup> <a name="scalingGroupNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput"></a>

```java
public java.lang.String getScalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName"></a>

```java
public java.lang.String getScalingGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterScalingGroupConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---


### FinspaceKxClusterTickerplantLogConfigurationList <a name="FinspaceKxClusterTickerplantLogConfigurationList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterTickerplantLogConfigurationList;

new FinspaceKxClusterTickerplantLogConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get"></a>

```java
public FinspaceKxClusterTickerplantLogConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>>

---


### FinspaceKxClusterTickerplantLogConfigurationOutputReference <a name="FinspaceKxClusterTickerplantLogConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference;

new FinspaceKxClusterTickerplantLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput">tickerplantLogVolumesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes">tickerplantLogVolumes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tickerplantLogVolumesInput`<sup>Optional</sup> <a name="tickerplantLogVolumesInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput"></a>

```java
public java.util.List<java.lang.String> getTickerplantLogVolumesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tickerplantLogVolumes`<sup>Required</sup> <a name="tickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes"></a>

```java
public java.util.List<java.lang.String> getTickerplantLogVolumes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration">FinspaceKxClusterTickerplantLogConfiguration</a>

---


### FinspaceKxClusterTimeoutsOutputReference <a name="FinspaceKxClusterTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterTimeoutsOutputReference;

new FinspaceKxClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---


### FinspaceKxClusterVpcConfigurationOutputReference <a name="FinspaceKxClusterVpcConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_cluster.FinspaceKxClusterVpcConfigurationOutputReference;

new FinspaceKxClusterVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue"></a>

```java
public FinspaceKxClusterVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---



