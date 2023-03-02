# `ecsTaskDefinition` Submodule <a name="`ecsTaskDefinition` Submodule" id="@cdktf/provider-aws.ecsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskDefinition <a name="EcsTaskDefinition" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition aws_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_definitions: str,
  family: str,
  cpu: str = None,
  ephemeral_storage: EcsTaskDefinitionEphemeralStorage = None,
  execution_role_arn: str = None,
  id: str = None,
  inference_accelerator: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]] = None,
  ipc_mode: str = None,
  memory: str = None,
  network_mode: str = None,
  pid_mode: str = None,
  placement_constraints: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]] = None,
  proxy_configuration: EcsTaskDefinitionProxyConfiguration = None,
  requires_compatibilities: typing.List[str] = None,
  runtime_platform: EcsTaskDefinitionRuntimePlatform = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  task_role_arn: str = None,
  volume: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.containerDefinitions">container_definitions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.inferenceAccelerator">inference_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]</code> | inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.ipcMode">ipc_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.pidMode">pid_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.proxyConfiguration">proxy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.requiresCompatibilities">requires_compatibilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.runtimePlatform">runtime_platform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | runtime_platform block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.taskRoleArn">task_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]</code> | volume block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_definitions`<sup>Required</sup> <a name="container_definitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.containerDefinitions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.ephemeralStorage"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_accelerator`<sup>Optional</sup> <a name="inference_accelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.inferenceAccelerator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]

inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}

---

##### `ipc_mode`<sup>Optional</sup> <a name="ipc_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.ipcMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}.

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.networkMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}.

---

##### `pid_mode`<sup>Optional</sup> <a name="pid_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.pidMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}.

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.placementConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}

---

##### `proxy_configuration`<sup>Optional</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.proxyConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}

---

##### `requires_compatibilities`<sup>Optional</sup> <a name="requires_compatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.requiresCompatibilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.

---

##### `runtime_platform`<sup>Optional</sup> <a name="runtime_platform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.runtimePlatform"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

runtime_platform block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.skipDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}.

---

##### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.taskRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#volume EcsTaskDefinition#volume}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage">put_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator">put_inference_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration">put_proxy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform">put_runtime_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator">reset_inference_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode">reset_ipc_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode">reset_network_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode">reset_pid_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration">reset_proxy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities">reset_requires_compatibilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform">reset_runtime_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy">reset_skip_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn">reset_task_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ephemeral_storage` <a name="put_ephemeral_storage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage"></a>

```python
def put_ephemeral_storage(
  size_in_gib: typing.Union[int, float]
) -> None
```

###### `size_in_gib`<sup>Required</sup> <a name="size_in_gib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage.parameter.sizeInGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}.

---

##### `put_inference_accelerator` <a name="put_inference_accelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator"></a>

```python
def put_inference_accelerator(
  value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]

---

##### `put_proxy_configuration` <a name="put_proxy_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration"></a>

```python
def put_proxy_configuration(
  container_name: str,
  properties: typing.Mapping[str] = None,
  type: str = None
) -> None
```

###### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

##### `put_runtime_platform` <a name="put_runtime_platform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform"></a>

```python
def put_runtime_platform(
  cpu_architecture: str = None,
  operating_system_family: str = None
) -> None
```

###### `cpu_architecture`<sup>Optional</sup> <a name="cpu_architecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform.parameter.cpuArchitecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}.

---

###### `operating_system_family`<sup>Optional</sup> <a name="operating_system_family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform.parameter.operatingSystemFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]

---

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inference_accelerator` <a name="reset_inference_accelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator"></a>

```python
def reset_inference_accelerator() -> None
```

##### `reset_ipc_mode` <a name="reset_ipc_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode"></a>

```python
def reset_ipc_mode() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_network_mode` <a name="reset_network_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode"></a>

```python
def reset_network_mode() -> None
```

##### `reset_pid_mode` <a name="reset_pid_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode"></a>

```python
def reset_pid_mode() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_proxy_configuration` <a name="reset_proxy_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration"></a>

```python
def reset_proxy_configuration() -> None
```

##### `reset_requires_compatibilities` <a name="reset_requires_compatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities"></a>

```python
def reset_requires_compatibilities() -> None
```

##### `reset_runtime_platform` <a name="reset_runtime_platform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform"></a>

```python
def reset_runtime_platform() -> None
```

##### `reset_skip_destroy` <a name="reset_skip_destroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy"></a>

```python
def reset_skip_destroy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_task_role_arn` <a name="reset_task_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn"></a>

```python
def reset_task_role_arn() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume"></a>

```python
def reset_volume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator">inference_accelerator</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration">proxy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform">runtime_platform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput">container_definitions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput">inference_accelerator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput">ipc_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput">pid_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput">proxy_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput">requires_compatibilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput">runtime_platform_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput">skip_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput">task_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions">container_definitions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode">ipc_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode">pid_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities">requires_compatibilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage"></a>

```python
ephemeral_storage: EcsTaskDefinitionEphemeralStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `inference_accelerator`<sup>Required</sup> <a name="inference_accelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator"></a>

```python
inference_accelerator: EcsTaskDefinitionInferenceAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints"></a>

```python
placement_constraints: EcsTaskDefinitionPlacementConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a>

---

##### `proxy_configuration`<sup>Required</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration"></a>

```python
proxy_configuration: EcsTaskDefinitionProxyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_platform`<sup>Required</sup> <a name="runtime_platform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform"></a>

```python
runtime_platform: EcsTaskDefinitionRuntimePlatformOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume"></a>

```python
volume: EcsTaskDefinitionVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a>

---

##### `container_definitions_input`<sup>Optional</sup> <a name="container_definitions_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput"></a>

```python
container_definitions_input: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inference_accelerator_input`<sup>Optional</sup> <a name="inference_accelerator_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput"></a>

```python
inference_accelerator_input: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]

---

##### `ipc_mode_input`<sup>Optional</sup> <a name="ipc_mode_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput"></a>

```python
ipc_mode_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `pid_mode_input`<sup>Optional</sup> <a name="pid_mode_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput"></a>

```python
pid_mode_input: str
```

- *Type:* str

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput"></a>

```python
placement_constraints_input: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]

---

##### `proxy_configuration_input`<sup>Optional</sup> <a name="proxy_configuration_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput"></a>

```python
proxy_configuration_input: EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `requires_compatibilities_input`<sup>Optional</sup> <a name="requires_compatibilities_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput"></a>

```python
requires_compatibilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime_platform_input`<sup>Optional</sup> <a name="runtime_platform_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput"></a>

```python
runtime_platform_input: EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `skip_destroy_input`<sup>Optional</sup> <a name="skip_destroy_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput"></a>

```python
skip_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_role_arn_input`<sup>Optional</sup> <a name="task_role_arn_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput"></a>

```python
task_role_arn_input: str
```

- *Type:* str

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]

---

##### `container_definitions`<sup>Required</sup> <a name="container_definitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions"></a>

```python
container_definitions: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipc_mode`<sup>Required</sup> <a name="ipc_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode"></a>

```python
ipc_mode: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `pid_mode`<sup>Required</sup> <a name="pid_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode"></a>

```python
pid_mode: str
```

- *Type:* str

---

##### `requires_compatibilities`<sup>Required</sup> <a name="requires_compatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities"></a>

```python
requires_compatibilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_destroy`<sup>Required</sup> <a name="skip_destroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_role_arn`<sup>Required</sup> <a name="task_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskDefinitionConfig <a name="EcsTaskDefinitionConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_definitions: str,
  family: str,
  cpu: str = None,
  ephemeral_storage: EcsTaskDefinitionEphemeralStorage = None,
  execution_role_arn: str = None,
  id: str = None,
  inference_accelerator: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]] = None,
  ipc_mode: str = None,
  memory: str = None,
  network_mode: str = None,
  pid_mode: str = None,
  placement_constraints: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]] = None,
  proxy_configuration: EcsTaskDefinitionProxyConfiguration = None,
  requires_compatibilities: typing.List[str] = None,
  runtime_platform: EcsTaskDefinitionRuntimePlatform = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  task_role_arn: str = None,
  volume: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions">container_definitions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator">inference_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]</code> | inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode">ipc_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode">pid_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration">proxy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities">requires_compatibilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform">runtime_platform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | runtime_platform block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_definitions`<sup>Required</sup> <a name="container_definitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions"></a>

```python
container_definitions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage"></a>

```python
ephemeral_storage: EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_accelerator`<sup>Optional</sup> <a name="inference_accelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator"></a>

```python
inference_accelerator: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]

inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}

---

##### `ipc_mode`<sup>Optional</sup> <a name="ipc_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode"></a>

```python
ipc_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}.

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}.

---

##### `pid_mode`<sup>Optional</sup> <a name="pid_mode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode"></a>

```python
pid_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}.

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints"></a>

```python
placement_constraints: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}

---

##### `proxy_configuration`<sup>Optional</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration"></a>

```python
proxy_configuration: EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}

---

##### `requires_compatibilities`<sup>Optional</sup> <a name="requires_compatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities"></a>

```python
requires_compatibilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.

---

##### `runtime_platform`<sup>Optional</sup> <a name="runtime_platform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform"></a>

```python
runtime_platform: EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

runtime_platform block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}.

---

##### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#volume EcsTaskDefinition#volume}

---

### EcsTaskDefinitionEphemeralStorage <a name="EcsTaskDefinitionEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage(
  size_in_gib: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib">size_in_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}. |

---

##### `size_in_gib`<sup>Required</sup> <a name="size_in_gib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib"></a>

```python
size_in_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}.

---

### EcsTaskDefinitionInferenceAccelerator <a name="EcsTaskDefinitionInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator(
  device_name: str,
  device_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType">device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}.

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}.

---

### EcsTaskDefinitionPlacementConstraints <a name="EcsTaskDefinitionPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints(
  type: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}.

---

### EcsTaskDefinitionProxyConfiguration <a name="EcsTaskDefinitionProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration(
  container_name: str,
  properties: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

### EcsTaskDefinitionRuntimePlatform <a name="EcsTaskDefinitionRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform(
  cpu_architecture: str = None,
  operating_system_family: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture">cpu_architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily">operating_system_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}. |

---

##### `cpu_architecture`<sup>Optional</sup> <a name="cpu_architecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture"></a>

```python
cpu_architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}.

---

##### `operating_system_family`<sup>Optional</sup> <a name="operating_system_family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily"></a>

```python
operating_system_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}.

---

### EcsTaskDefinitionVolume <a name="EcsTaskDefinitionVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolume(
  name: str,
  docker_volume_configuration: EcsTaskDefinitionVolumeDockerVolumeConfiguration = None,
  efs_volume_configuration: EcsTaskDefinitionVolumeEfsVolumeConfiguration = None,
  fsx_windows_file_server_volume_configuration: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration = None,
  host_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration">docker_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | docker_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration">efs_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | efs_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration">fsx_windows_file_server_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | fsx_windows_file_server_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath">host_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}.

---

##### `docker_volume_configuration`<sup>Optional</sup> <a name="docker_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration"></a>

```python
docker_volume_configuration: EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

docker_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}

---

##### `efs_volume_configuration`<sup>Optional</sup> <a name="efs_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration"></a>

```python
efs_volume_configuration: EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

efs_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}

---

##### `fsx_windows_file_server_volume_configuration`<sup>Optional</sup> <a name="fsx_windows_file_server_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration"></a>

```python
fsx_windows_file_server_volume_configuration: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

fsx_windows_file_server_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}

---

##### `host_path`<sup>Optional</sup> <a name="host_path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}.

---

### EcsTaskDefinitionVolumeDockerVolumeConfiguration <a name="EcsTaskDefinitionVolumeDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration(
  autoprovision: typing.Union[bool, IResolvable] = None,
  driver: str = None,
  driver_opts: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision">autoprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver">driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts">driver_opts</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}. |

---

##### `autoprovision`<sup>Optional</sup> <a name="autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision"></a>

```python
autoprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}.

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver"></a>

```python
driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}.

---

##### `driver_opts`<sup>Optional</sup> <a name="driver_opts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts"></a>

```python
driver_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfiguration <a name="EcsTaskDefinitionVolumeEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration(
  file_system_id: str,
  authorization_config: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig = None,
  root_directory: str = None,
  transit_encryption: str = None,
  transit_encryption_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory">root_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption">transit_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort">transit_encryption_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}. |

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig"></a>

```python
authorization_config: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

##### `transit_encryption`<sup>Optional</sup> <a name="transit_encryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption"></a>

```python
transit_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}.

---

##### `transit_encryption_port`<sup>Optional</sup> <a name="transit_encryption_port" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort"></a>

```python
transit_encryption_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig(
  access_point_id: str = None,
  iam: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId">access_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam">iam</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}. |

---

##### `access_point_id`<sup>Optional</sup> <a name="access_point_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}.

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam"></a>

```python
iam: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration(
  authorization_config: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig,
  file_system_id: str,
  root_directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory">root_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig"></a>

```python
authorization_config: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig(
  credentials_parameter: str,
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}. |

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskDefinitionEphemeralStorageOutputReference <a name="EcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput">size_in_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib">size_in_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_in_gib_input`<sup>Optional</sup> <a name="size_in_gib_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput"></a>

```python
size_in_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gib`<sup>Required</sup> <a name="size_in_gib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib"></a>

```python
size_in_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---


### EcsTaskDefinitionInferenceAcceleratorList <a name="EcsTaskDefinitionInferenceAcceleratorList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsTaskDefinitionInferenceAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionInferenceAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>]]

---


### EcsTaskDefinitionInferenceAcceleratorOutputReference <a name="EcsTaskDefinitionInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput">device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType">device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput"></a>

```python
device_type_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsTaskDefinitionInferenceAccelerator, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>, cdktf.IResolvable]

---


### EcsTaskDefinitionPlacementConstraintsList <a name="EcsTaskDefinitionPlacementConstraintsList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsTaskDefinitionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>]]

---


### EcsTaskDefinitionPlacementConstraintsOutputReference <a name="EcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsTaskDefinitionPlacementConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>, cdktf.IResolvable]

---


### EcsTaskDefinitionProxyConfigurationOutputReference <a name="EcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---


### EcsTaskDefinitionRuntimePlatformOutputReference <a name="EcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture">reset_cpu_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily">reset_operating_system_family</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_architecture` <a name="reset_cpu_architecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture"></a>

```python
def reset_cpu_architecture() -> None
```

##### `reset_operating_system_family` <a name="reset_operating_system_family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily"></a>

```python
def reset_operating_system_family() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput">cpu_architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput">operating_system_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">cpu_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">operating_system_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_architecture_input`<sup>Optional</sup> <a name="cpu_architecture_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput"></a>

```python
cpu_architecture_input: str
```

- *Type:* str

---

##### `operating_system_family_input`<sup>Optional</sup> <a name="operating_system_family_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput"></a>

```python
operating_system_family_input: str
```

- *Type:* str

---

##### `cpu_architecture`<sup>Required</sup> <a name="cpu_architecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```python
cpu_architecture: str
```

- *Type:* str

---

##### `operating_system_family`<sup>Required</sup> <a name="operating_system_family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```python
operating_system_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---


### EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision">reset_autoprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver">reset_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts">reset_driver_opts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autoprovision` <a name="reset_autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision"></a>

```python
def reset_autoprovision() -> None
```

##### `reset_driver` <a name="reset_driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver"></a>

```python
def reset_driver() -> None
```

##### `reset_driver_opts` <a name="reset_driver_opts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts"></a>

```python
def reset_driver_opts() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput">autoprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput">driver_opts_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision">autoprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts">driver_opts</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoprovision_input`<sup>Optional</sup> <a name="autoprovision_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput"></a>

```python
autoprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `driver_opts_input`<sup>Optional</sup> <a name="driver_opts_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput"></a>

```python
driver_opts_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `autoprovision`<sup>Required</sup> <a name="autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```python
autoprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `driver_opts`<sup>Required</sup> <a name="driver_opts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```python
driver_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId">reset_access_point_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam">reset_iam</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_point_id` <a name="reset_access_point_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId"></a>

```python
def reset_access_point_id() -> None
```

##### `reset_iam` <a name="reset_iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam"></a>

```python
def reset_iam() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput">access_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput">iam_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">access_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_point_id_input`<sup>Optional</sup> <a name="access_point_id_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput"></a>

```python
access_point_id_input: str
```

- *Type:* str

---

##### `iam_input`<sup>Optional</sup> <a name="iam_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput"></a>

```python
iam_input: str
```

- *Type:* str

---

##### `access_point_id`<sup>Required</sup> <a name="access_point_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```python
iam: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory">reset_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption">reset_transit_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort">reset_transit_encryption_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  access_point_id: str = None,
  iam: str = None
) -> None
```

###### `access_point_id`<sup>Optional</sup> <a name="access_point_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.accessPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}.

---

###### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.iam"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}.

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```

##### `reset_transit_encryption` <a name="reset_transit_encryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption"></a>

```python
def reset_transit_encryption() -> None
```

##### `reset_transit_encryption_port` <a name="reset_transit_encryption_port" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort"></a>

```python
def reset_transit_encryption_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput">transit_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput">transit_encryption_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption">transit_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">transit_encryption_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```python
authorization_config: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `transit_encryption_input`<sup>Optional</sup> <a name="transit_encryption_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput"></a>

```python
transit_encryption_input: str
```

- *Type:* str

---

##### `transit_encryption_port_input`<sup>Optional</sup> <a name="transit_encryption_port_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput"></a>

```python
transit_encryption_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `transit_encryption`<sup>Required</sup> <a name="transit_encryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```python
transit_encryption: str
```

- *Type:* str

---

##### `transit_encryption_port`<sup>Required</sup> <a name="transit_encryption_port" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```python
transit_encryption_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput">credentials_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_parameter_input`<sup>Optional</sup> <a name="credentials_parameter_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput"></a>

```python
credentials_parameter_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  credentials_parameter: str,
  domain: str
) -> None
```

###### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.credentialsParameter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}.

---

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```python
authorization_config: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeList <a name="EcsTaskDefinitionVolumeList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsTaskDefinitionVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>]]

---


### EcsTaskDefinitionVolumeOutputReference <a name="EcsTaskDefinitionVolumeOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_task_definition

ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration">put_docker_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration">put_efs_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration">put_fsx_windows_file_server_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration">reset_docker_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration">reset_efs_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration">reset_fsx_windows_file_server_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath">reset_host_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_docker_volume_configuration` <a name="put_docker_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration"></a>

```python
def put_docker_volume_configuration(
  autoprovision: typing.Union[bool, IResolvable] = None,
  driver: str = None,
  driver_opts: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  scope: str = None
) -> None
```

###### `autoprovision`<sup>Optional</sup> <a name="autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.autoprovision"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}.

---

###### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.driver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}.

---

###### `driver_opts`<sup>Optional</sup> <a name="driver_opts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.driverOpts"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}.

---

##### `put_efs_volume_configuration` <a name="put_efs_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration"></a>

```python
def put_efs_volume_configuration(
  file_system_id: str,
  authorization_config: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig = None,
  root_directory: str = None,
  transit_encryption: str = None,
  transit_encryption_port: typing.Union[int, float] = None
) -> None
```

###### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

###### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.rootDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

###### `transit_encryption`<sup>Optional</sup> <a name="transit_encryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.transitEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}.

---

###### `transit_encryption_port`<sup>Optional</sup> <a name="transit_encryption_port" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.transitEncryptionPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.

---

##### `put_fsx_windows_file_server_volume_configuration` <a name="put_fsx_windows_file_server_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration"></a>

```python
def put_fsx_windows_file_server_volume_configuration(
  authorization_config: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig,
  file_system_id: str,
  root_directory: str
) -> None
```

###### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

###### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

###### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.rootDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

##### `reset_docker_volume_configuration` <a name="reset_docker_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration"></a>

```python
def reset_docker_volume_configuration() -> None
```

##### `reset_efs_volume_configuration` <a name="reset_efs_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration"></a>

```python
def reset_efs_volume_configuration() -> None
```

##### `reset_fsx_windows_file_server_volume_configuration` <a name="reset_fsx_windows_file_server_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration"></a>

```python
def reset_fsx_windows_file_server_volume_configuration() -> None
```

##### `reset_host_path` <a name="reset_host_path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath"></a>

```python
def reset_host_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration">docker_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration">efs_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration">fsx_windows_file_server_volume_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput">docker_volume_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput">efs_volume_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput">fsx_windows_file_server_volume_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput">host_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `docker_volume_configuration`<sup>Required</sup> <a name="docker_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration"></a>

```python
docker_volume_configuration: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a>

---

##### `efs_volume_configuration`<sup>Required</sup> <a name="efs_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration"></a>

```python
efs_volume_configuration: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a>

---

##### `fsx_windows_file_server_volume_configuration`<sup>Required</sup> <a name="fsx_windows_file_server_volume_configuration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```python
fsx_windows_file_server_volume_configuration: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `docker_volume_configuration_input`<sup>Optional</sup> <a name="docker_volume_configuration_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput"></a>

```python
docker_volume_configuration_input: EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `efs_volume_configuration_input`<sup>Optional</sup> <a name="efs_volume_configuration_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput"></a>

```python
efs_volume_configuration_input: EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `fsx_windows_file_server_volume_configuration_input`<sup>Optional</sup> <a name="fsx_windows_file_server_volume_configuration_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput"></a>

```python
fsx_windows_file_server_volume_configuration_input: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput"></a>

```python
host_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsTaskDefinitionVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>, cdktf.IResolvable]

---



