# `aws_finspace_kx_cluster`

Refer to the Terraform Registory for docs: [`aws_finspace_kx_cluster`](https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster).

# `finspaceKxCluster` Submodule <a name="`finspaceKxCluster` Submodule" id="@cdktf/provider-aws.finspaceKxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxCluster <a name="FinspaceKxCluster" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  az_mode: str,
  capacity_configuration: FinspaceKxClusterCapacityConfiguration,
  environment_id: str,
  name: str,
  release_label: str,
  type: str,
  vpc_configuration: FinspaceKxClusterVpcConfiguration,
  auto_scaling_configuration: FinspaceKxClusterAutoScalingConfiguration = None,
  availability_zone_id: str = None,
  cache_storage_configurations: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]] = None,
  code: FinspaceKxClusterCode = None,
  command_line_arguments: typing.Mapping[str] = None,
  database: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]] = None,
  description: str = None,
  execution_role: str = None,
  id: str = None,
  initialization_script: str = None,
  savedown_storage_configuration: FinspaceKxClusterSavedownStorageConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.azMode">az_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.cacheStorageConfigurations">cache_storage_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]</code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.commandLineArguments">command_line_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.initializationScript">initialization_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.savedownStorageConfiguration">savedown_storage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.azMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `capacity_configuration`<sup>Required</sup> <a name="capacity_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.capacityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.releaseLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.autoScalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `cache_storage_configurations`<sup>Optional</sup> <a name="cache_storage_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.cacheStorageConfigurations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.commandLineArguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.database"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialization_script`<sup>Optional</sup> <a name="initialization_script" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.initializationScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `savedown_storage_configuration`<sup>Optional</sup> <a name="savedown_storage_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.savedownStorageConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration">put_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations">put_cache_storage_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration">put_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration">put_savedown_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration">reset_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations">reset_cache_storage_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments">reset_command_line_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript">reset_initialization_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration">reset_savedown_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_scaling_configuration` <a name="put_auto_scaling_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration"></a>

```python
def put_auto_scaling_configuration(
  auto_scaling_metric: str,
  max_node_count: typing.Union[int, float],
  metric_target: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  scale_in_cooldown_seconds: typing.Union[int, float],
  scale_out_cooldown_seconds: typing.Union[int, float]
) -> None
```

###### `auto_scaling_metric`<sup>Required</sup> <a name="auto_scaling_metric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.autoScalingMetric"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}.

---

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}.

---

###### `metric_target`<sup>Required</sup> <a name="metric_target" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.metricTarget"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}.

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}.

---

###### `scale_in_cooldown_seconds`<sup>Required</sup> <a name="scale_in_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.scaleInCooldownSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}.

---

###### `scale_out_cooldown_seconds`<sup>Required</sup> <a name="scale_out_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.scaleOutCooldownSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}.

---

##### `put_cache_storage_configurations` <a name="put_cache_storage_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations"></a>

```python
def put_cache_storage_configurations(
  value: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]

---

##### `put_capacity_configuration` <a name="put_capacity_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration"></a>

```python
def put_capacity_configuration(
  node_count: typing.Union[int, float],
  node_type: str
) -> None
```

###### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

###### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}.

---

##### `put_code` <a name="put_code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode"></a>

```python
def put_code(
  s3_bucket: str,
  s3_key: str,
  s3_object_version: str = None
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}.

---

###### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}.

---

###### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.s3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}.

---

##### `put_database` <a name="put_database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase"></a>

```python
def put_database(
  value: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]

---

##### `put_savedown_storage_configuration` <a name="put_savedown_storage_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration"></a>

```python
def put_savedown_storage_configuration(
  size: typing.Union[int, float],
  type: str
) -> None
```

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}.

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  ip_address_type: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}.

---

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}.

---

##### `reset_auto_scaling_configuration` <a name="reset_auto_scaling_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration"></a>

```python
def reset_auto_scaling_configuration() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_cache_storage_configurations` <a name="reset_cache_storage_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations"></a>

```python
def reset_cache_storage_configurations() -> None
```

##### `reset_code` <a name="reset_code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_command_line_arguments` <a name="reset_command_line_arguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments"></a>

```python
def reset_command_line_arguments() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initialization_script` <a name="reset_initialization_script" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript"></a>

```python
def reset_initialization_script() -> None
```

##### `reset_savedown_storage_configuration` <a name="reset_savedown_storage_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration"></a>

```python
def reset_savedown_storage_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations">cache_storage_configurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp">last_modified_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration">savedown_storage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput">auto_scaling_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput">az_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput">cache_storage_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput">capacity_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput">code_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput">command_line_arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput">database_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput">initialization_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput">release_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput">savedown_storage_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode">az_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments">command_line_arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript">initialization_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_scaling_configuration`<sup>Required</sup> <a name="auto_scaling_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: FinspaceKxClusterAutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a>

---

##### `cache_storage_configurations`<sup>Required</sup> <a name="cache_storage_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations"></a>

```python
cache_storage_configurations: FinspaceKxClusterCacheStorageConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a>

---

##### `capacity_configuration`<sup>Required</sup> <a name="capacity_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration"></a>

```python
capacity_configuration: FinspaceKxClusterCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code"></a>

```python
code: FinspaceKxClusterCodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database"></a>

```python
database: FinspaceKxClusterDatabaseList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a>

---

##### `last_modified_timestamp`<sup>Required</sup> <a name="last_modified_timestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp"></a>

```python
last_modified_timestamp: str
```

- *Type:* str

---

##### `savedown_storage_configuration`<sup>Required</sup> <a name="savedown_storage_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration"></a>

```python
savedown_storage_configuration: FinspaceKxClusterSavedownStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts"></a>

```python
timeouts: FinspaceKxClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration"></a>

```python
vpc_configuration: FinspaceKxClusterVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a>

---

##### `auto_scaling_configuration_input`<sup>Optional</sup> <a name="auto_scaling_configuration_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput"></a>

```python
auto_scaling_configuration_input: FinspaceKxClusterAutoScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `az_mode_input`<sup>Optional</sup> <a name="az_mode_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput"></a>

```python
az_mode_input: str
```

- *Type:* str

---

##### `cache_storage_configurations_input`<sup>Optional</sup> <a name="cache_storage_configurations_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput"></a>

```python
cache_storage_configurations_input: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]

---

##### `capacity_configuration_input`<sup>Optional</sup> <a name="capacity_configuration_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput"></a>

```python
capacity_configuration_input: FinspaceKxClusterCapacityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput"></a>

```python
code_input: FinspaceKxClusterCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `command_line_arguments_input`<sup>Optional</sup> <a name="command_line_arguments_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput"></a>

```python
command_line_arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput"></a>

```python
database_input: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initialization_script_input`<sup>Optional</sup> <a name="initialization_script_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput"></a>

```python
initialization_script_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_label_input`<sup>Optional</sup> <a name="release_label_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput"></a>

```python
release_label_input: str
```

- *Type:* str

---

##### `savedown_storage_configuration_input`<sup>Optional</sup> <a name="savedown_storage_configuration_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput"></a>

```python
savedown_storage_configuration_input: FinspaceKxClusterSavedownStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FinspaceKxClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: FinspaceKxClusterVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode"></a>

```python
az_mode: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments"></a>

```python
command_line_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initialization_script`<sup>Required</sup> <a name="initialization_script" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript"></a>

```python
initialization_script: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxClusterAutoScalingConfiguration <a name="FinspaceKxClusterAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration(
  auto_scaling_metric: str,
  max_node_count: typing.Union[int, float],
  metric_target: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  scale_in_cooldown_seconds: typing.Union[int, float],
  scale_out_cooldown_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric">auto_scaling_metric</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget">metric_target</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds">scale_in_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds">scale_out_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}. |

---

##### `auto_scaling_metric`<sup>Required</sup> <a name="auto_scaling_metric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric"></a>

```python
auto_scaling_metric: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}.

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}.

---

##### `metric_target`<sup>Required</sup> <a name="metric_target" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget"></a>

```python
metric_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}.

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}.

---

##### `scale_in_cooldown_seconds`<sup>Required</sup> <a name="scale_in_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds"></a>

```python
scale_in_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}.

---

##### `scale_out_cooldown_seconds`<sup>Required</sup> <a name="scale_out_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds"></a>

```python
scale_out_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}.

---

### FinspaceKxClusterCacheStorageConfigurations <a name="FinspaceKxClusterCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations(
  size: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

### FinspaceKxClusterCapacityConfiguration <a name="FinspaceKxClusterCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCapacityConfiguration(
  node_count: typing.Union[int, float],
  node_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}. |

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}.

---

### FinspaceKxClusterCode <a name="FinspaceKxClusterCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCode(
  s3_bucket: str,
  s3_key: str,
  s3_object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}.

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}.

---

### FinspaceKxClusterConfig <a name="FinspaceKxClusterConfig" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  az_mode: str,
  capacity_configuration: FinspaceKxClusterCapacityConfiguration,
  environment_id: str,
  name: str,
  release_label: str,
  type: str,
  vpc_configuration: FinspaceKxClusterVpcConfiguration,
  auto_scaling_configuration: FinspaceKxClusterAutoScalingConfiguration = None,
  availability_zone_id: str = None,
  cache_storage_configurations: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]] = None,
  code: FinspaceKxClusterCode = None,
  command_line_arguments: typing.Mapping[str] = None,
  database: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]] = None,
  description: str = None,
  execution_role: str = None,
  id: str = None,
  initialization_script: str = None,
  savedown_storage_configuration: FinspaceKxClusterSavedownStorageConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode">az_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations">cache_storage_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]</code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments">command_line_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript">initialization_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration">savedown_storage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode"></a>

```python
az_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `capacity_configuration`<sup>Required</sup> <a name="capacity_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration"></a>

```python
capacity_configuration: FinspaceKxClusterCapacityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: FinspaceKxClusterVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: FinspaceKxClusterAutoScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `cache_storage_configurations`<sup>Optional</sup> <a name="cache_storage_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations"></a>

```python
cache_storage_configurations: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code"></a>

```python
code: FinspaceKxClusterCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments"></a>

```python
command_line_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database"></a>

```python
database: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialization_script`<sup>Optional</sup> <a name="initialization_script" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript"></a>

```python
initialization_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `savedown_storage_configuration`<sup>Optional</sup> <a name="savedown_storage_configuration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration"></a>

```python
savedown_storage_configuration: FinspaceKxClusterSavedownStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts"></a>

```python
timeouts: FinspaceKxClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

### FinspaceKxClusterDatabase <a name="FinspaceKxClusterDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabase(
  database_name: str,
  cache_configurations: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabaseCacheConfigurations]] = None,
  changeset_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations">cache_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]</code> | cache_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId">changeset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}.

---

##### `cache_configurations`<sup>Optional</sup> <a name="cache_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations"></a>

```python
cache_configurations: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabaseCacheConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]

cache_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}

---

##### `changeset_id`<sup>Optional</sup> <a name="changeset_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId"></a>

```python
changeset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}.

---

### FinspaceKxClusterDatabaseCacheConfigurations <a name="FinspaceKxClusterDatabaseCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations(
  cache_type: str,
  db_paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType">cache_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths">db_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}. |

---

##### `cache_type`<sup>Required</sup> <a name="cache_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType"></a>

```python
cache_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}.

---

##### `db_paths`<sup>Optional</sup> <a name="db_paths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths"></a>

```python
db_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}.

---

### FinspaceKxClusterSavedownStorageConfiguration <a name="FinspaceKxClusterSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration(
  size: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

### FinspaceKxClusterTimeouts <a name="FinspaceKxClusterTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}.

---

### FinspaceKxClusterVpcConfiguration <a name="FinspaceKxClusterVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterVpcConfiguration(
  ip_address_type: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}. |

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxClusterAutoScalingConfigurationOutputReference <a name="FinspaceKxClusterAutoScalingConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput">auto_scaling_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput">metric_target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput">scale_in_cooldown_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput">scale_out_cooldown_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric">auto_scaling_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget">metric_target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds">scale_in_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds">scale_out_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_metric_input`<sup>Optional</sup> <a name="auto_scaling_metric_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput"></a>

```python
auto_scaling_metric_input: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_target_input`<sup>Optional</sup> <a name="metric_target_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput"></a>

```python
metric_target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_cooldown_seconds_input`<sup>Optional</sup> <a name="scale_in_cooldown_seconds_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput"></a>

```python
scale_in_cooldown_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_seconds_input`<sup>Optional</sup> <a name="scale_out_cooldown_seconds_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput"></a>

```python
scale_out_cooldown_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_scaling_metric`<sup>Required</sup> <a name="auto_scaling_metric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric"></a>

```python
auto_scaling_metric: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_target`<sup>Required</sup> <a name="metric_target" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget"></a>

```python
metric_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_cooldown_seconds`<sup>Required</sup> <a name="scale_in_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds"></a>

```python
scale_in_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_seconds`<sup>Required</sup> <a name="scale_out_cooldown_seconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds"></a>

```python
scale_out_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxClusterAutoScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---


### FinspaceKxClusterCacheStorageConfigurationsList <a name="FinspaceKxClusterCacheStorageConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxClusterCacheStorageConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxClusterCacheStorageConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]]

---


### FinspaceKxClusterCacheStorageConfigurationsOutputReference <a name="FinspaceKxClusterCacheStorageConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxClusterCacheStorageConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations">FinspaceKxClusterCacheStorageConfigurations</a>]

---


### FinspaceKxClusterCapacityConfigurationOutputReference <a name="FinspaceKxClusterCapacityConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxClusterCapacityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---


### FinspaceKxClusterCodeOutputReference <a name="FinspaceKxClusterCodeOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxClusterCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---


### FinspaceKxClusterDatabaseCacheConfigurationsList <a name="FinspaceKxClusterDatabaseCacheConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxClusterDatabaseCacheConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabaseCacheConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]

---


### FinspaceKxClusterDatabaseCacheConfigurationsOutputReference <a name="FinspaceKxClusterDatabaseCacheConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths">reset_db_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_db_paths` <a name="reset_db_paths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths"></a>

```python
def reset_db_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput">cache_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput">db_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType">cache_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths">db_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_type_input`<sup>Optional</sup> <a name="cache_type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput"></a>

```python
cache_type_input: str
```

- *Type:* str

---

##### `db_paths_input`<sup>Optional</sup> <a name="db_paths_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput"></a>

```python
db_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_type`<sup>Required</sup> <a name="cache_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType"></a>

```python
cache_type: str
```

- *Type:* str

---

##### `db_paths`<sup>Required</sup> <a name="db_paths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths"></a>

```python
db_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxClusterDatabaseCacheConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]

---


### FinspaceKxClusterDatabaseList <a name="FinspaceKxClusterDatabaseList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxClusterDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]]

---


### FinspaceKxClusterDatabaseOutputReference <a name="FinspaceKxClusterDatabaseOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations">put_cache_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations">reset_cache_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId">reset_changeset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_configurations` <a name="put_cache_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations"></a>

```python
def put_cache_configurations(
  value: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabaseCacheConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]

---

##### `reset_cache_configurations` <a name="reset_cache_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations"></a>

```python
def reset_cache_configurations() -> None
```

##### `reset_changeset_id` <a name="reset_changeset_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId"></a>

```python
def reset_changeset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations">cache_configurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput">cache_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput">changeset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId">changeset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_configurations`<sup>Required</sup> <a name="cache_configurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations"></a>

```python
cache_configurations: FinspaceKxClusterDatabaseCacheConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a>

---

##### `cache_configurations_input`<sup>Optional</sup> <a name="cache_configurations_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput"></a>

```python
cache_configurations_input: typing.Union[IResolvable, typing.List[FinspaceKxClusterDatabaseCacheConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations">FinspaceKxClusterDatabaseCacheConfigurations</a>]]

---

##### `changeset_id_input`<sup>Optional</sup> <a name="changeset_id_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput"></a>

```python
changeset_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `changeset_id`<sup>Required</sup> <a name="changeset_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId"></a>

```python
changeset_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxClusterDatabase]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase">FinspaceKxClusterDatabase</a>]

---


### FinspaceKxClusterSavedownStorageConfigurationOutputReference <a name="FinspaceKxClusterSavedownStorageConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxClusterSavedownStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---


### FinspaceKxClusterTimeoutsOutputReference <a name="FinspaceKxClusterTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>]

---


### FinspaceKxClusterVpcConfigurationOutputReference <a name="FinspaceKxClusterVpcConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_cluster

finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxClusterVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---



