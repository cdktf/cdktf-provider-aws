# `data_aws_ecs_task_execution`

Refer to the Terraform Registory for docs: [`data_aws_ecs_task_execution`](https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution).

# `dataAwsEcsTaskExecution` Submodule <a name="`dataAwsEcsTaskExecution` Submodule" id="@cdktf/provider-aws.dataAwsEcsTaskExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsTaskExecution <a name="DataAwsEcsTaskExecution" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution aws_ecs_task_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  task_definition: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]] = None,
  desired_count: typing.Union[int, float] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  id: str = None,
  launch_type: str = None,
  network_configuration: DataAwsEcsTaskExecutionNetworkConfiguration = None,
  overrides: DataAwsEcsTaskExecutionOverrides = None,
  placement_constraints: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]] = None,
  placement_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  started_by: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.taskDefinition">task_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementStrategy">placement_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]</code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.referenceId">reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.startedBy">started_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.cluster"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}.

---

##### `task_definition`<sup>Required</sup> <a name="task_definition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.taskDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}.

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}

---

##### `desired_count`<sup>Optional</sup> <a name="desired_count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.desiredCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}.

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.launchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.overrides"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}

---

##### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]

placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.propagateTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}.

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.referenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}.

---

##### `started_by`<sup>Optional</sup> <a name="started_by" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.startedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy">put_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount">reset_desired_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy">reset_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId">reset_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy">reset_started_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
) -> None
```

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration.parameter.assignPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}.

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides"></a>

```python
def put_overrides(
  container_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]] = None,
  cpu: str = None,
  execution_role_arn: str = None,
  inference_accelerator_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]] = None,
  memory: str = None,
  task_role_arn: str = None
) -> None
```

###### `container_overrides`<sup>Optional</sup> <a name="container_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.containerOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]

container_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#container_overrides DataAwsEcsTaskExecution#container_overrides}

---

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

###### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}.

---

###### `inference_accelerator_overrides`<sup>Optional</sup> <a name="inference_accelerator_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.inferenceAcceleratorOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]

inference_accelerator_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#inference_accelerator_overrides DataAwsEcsTaskExecution#inference_accelerator_overrides}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

###### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.taskRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}.

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]

---

##### `put_placement_strategy` <a name="put_placement_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy"></a>

```python
def put_placement_strategy(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]

---

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_desired_count` <a name="reset_desired_count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount"></a>

```python
def reset_desired_count() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_placement_strategy` <a name="reset_placement_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy"></a>

```python
def reset_placement_strategy() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_reference_id` <a name="reset_reference_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId"></a>

```python
def reset_reference_id() -> None
```

##### `reset_started_by` <a name="reset_started_by" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy"></a>

```python
def reset_started_by() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEcsTaskExecution resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEcsTaskExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEcsTaskExecution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEcsTaskExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcsTaskExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy">placement_strategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns">task_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput">desired_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput">overrides_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput">placement_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput">reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput">started_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput">task_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy">started_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition">task_definition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: DataAwsEcsTaskExecutionCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration"></a>

```python
network_configuration: DataAwsEcsTaskExecutionNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides"></a>

```python
overrides: DataAwsEcsTaskExecutionOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints"></a>

```python
placement_constraints: DataAwsEcsTaskExecutionPlacementConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a>

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy"></a>

```python
placement_strategy: DataAwsEcsTaskExecutionPlacementStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a>

---

##### `task_arns`<sup>Required</sup> <a name="task_arns" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns"></a>

```python
task_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `desired_count_input`<sup>Optional</sup> <a name="desired_count_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput"></a>

```python
desired_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput"></a>

```python
network_configuration_input: DataAwsEcsTaskExecutionNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput"></a>

```python
overrides_input: DataAwsEcsTaskExecutionOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput"></a>

```python
placement_constraints_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]

---

##### `placement_strategy_input`<sup>Optional</sup> <a name="placement_strategy_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput"></a>

```python
placement_strategy_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `reference_id_input`<sup>Optional</sup> <a name="reference_id_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput"></a>

```python
reference_id_input: str
```

- *Type:* str

---

##### `started_by_input`<sup>Optional</sup> <a name="started_by_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput"></a>

```python
started_by_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_definition_input`<sup>Optional</sup> <a name="task_definition_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput"></a>

```python
task_definition_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `desired_count`<sup>Required</sup> <a name="desired_count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount"></a>

```python
desired_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `started_by`<sup>Required</sup> <a name="started_by" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy"></a>

```python
started_by: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_definition`<sup>Required</sup> <a name="task_definition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition"></a>

```python
task_definition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategy <a name="DataAwsEcsTaskExecutionCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy(
  capacity_provider: str,
  base: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}. |

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}.

---

### DataAwsEcsTaskExecutionConfig <a name="DataAwsEcsTaskExecutionConfig" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  task_definition: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]] = None,
  desired_count: typing.Union[int, float] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  id: str = None,
  launch_type: str = None,
  network_configuration: DataAwsEcsTaskExecutionNetworkConfiguration = None,
  overrides: DataAwsEcsTaskExecutionOverrides = None,
  placement_constraints: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]] = None,
  placement_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  started_by: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition">task_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy">placement_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]</code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId">reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy">started_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}.

---

##### `task_definition`<sup>Required</sup> <a name="task_definition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition"></a>

```python
task_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}.

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}

---

##### `desired_count`<sup>Optional</sup> <a name="desired_count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount"></a>

```python
desired_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}.

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration"></a>

```python
network_configuration: DataAwsEcsTaskExecutionNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides"></a>

```python
overrides: DataAwsEcsTaskExecutionOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints"></a>

```python
placement_constraints: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}

---

##### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy"></a>

```python
placement_strategy: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]

placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}.

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}.

---

##### `started_by`<sup>Optional</sup> <a name="started_by" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy"></a>

```python
started_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}.

---

### DataAwsEcsTaskExecutionNetworkConfiguration <a name="DataAwsEcsTaskExecutionNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}.

---

### DataAwsEcsTaskExecutionOverrides <a name="DataAwsEcsTaskExecutionOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides(
  container_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]] = None,
  cpu: str = None,
  execution_role_arn: str = None,
  inference_accelerator_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]] = None,
  memory: str = None,
  task_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides">container_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]</code> | container_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides">inference_accelerator_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]</code> | inference_accelerator_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}. |

---

##### `container_overrides`<sup>Optional</sup> <a name="container_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides"></a>

```python
container_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]

container_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#container_overrides DataAwsEcsTaskExecution#container_overrides}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}.

---

##### `inference_accelerator_overrides`<sup>Optional</sup> <a name="inference_accelerator_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides"></a>

```python
inference_accelerator_overrides: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]

inference_accelerator_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#inference_accelerator_overrides DataAwsEcsTaskExecution#inference_accelerator_overrides}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverrides <a name="DataAwsEcsTaskExecutionOverridesContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides(
  name: str,
  command: typing.List[str] = None,
  cpu: typing.Union[int, float] = None,
  environment: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]] = None,
  memory: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  resource_requirements: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment">environment</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements">resource_requirements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]</code> | resource_requirements block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment"></a>

```python
environment: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#environment DataAwsEcsTaskExecution#environment}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}.

---

##### `resource_requirements`<sup>Optional</sup> <a name="resource_requirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements"></a>

```python
resource_requirements: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]

resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#resource_requirements DataAwsEcsTaskExecution#resource_requirements}

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides(
  device_name: str = None,
  device_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType">device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}.

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}.

---

### DataAwsEcsTaskExecutionPlacementConstraints <a name="DataAwsEcsTaskExecutionPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints(
  type: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}.

---

### DataAwsEcsTaskExecutionPlacementStrategy <a name="DataAwsEcsTaskExecutionPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy(
  type: str,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategyList <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]]

---


### DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionCapacityProviderStrategy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>]

---


### DataAwsEcsTaskExecutionNetworkConfigurationOutputReference <a name="DataAwsEcsTaskExecutionNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEcsTaskExecutionNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements">put_resource_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements">reset_resource_requirements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment` <a name="put_environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment"></a>

```python
def put_environment(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]

---

##### `put_resource_requirements` <a name="put_resource_requirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements"></a>

```python
def put_resource_requirements(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]

---

##### `reset_command` <a name="reset_command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_resource_requirements` <a name="reset_resource_requirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements"></a>

```python
def reset_resource_requirements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements">resource_requirements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput">resource_requirements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment"></a>

```python
environment: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a>

---

##### `resource_requirements`<sup>Required</sup> <a name="resource_requirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements"></a>

```python
resource_requirements: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>]]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_requirements_input`<sup>Optional</sup> <a name="resource_requirements_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput"></a>

```python
resource_requirements_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionOverridesContainerOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>]

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType">reset_device_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_device_type` <a name="reset_device_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType"></a>

```python
def reset_device_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput">device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType">device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput"></a>

```python
device_type_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]

---


### DataAwsEcsTaskExecutionOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides">put_container_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides">put_inference_accelerator_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides">reset_container_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides">reset_inference_accelerator_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn">reset_task_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_overrides` <a name="put_container_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides"></a>

```python
def put_container_overrides(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]

---

##### `put_inference_accelerator_overrides` <a name="put_inference_accelerator_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides"></a>

```python
def put_inference_accelerator_overrides(
  value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]

---

##### `reset_container_overrides` <a name="reset_container_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides"></a>

```python
def reset_container_overrides() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_inference_accelerator_overrides` <a name="reset_inference_accelerator_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides"></a>

```python
def reset_inference_accelerator_overrides() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_task_role_arn` <a name="reset_task_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn"></a>

```python
def reset_task_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides">container_overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides">inference_accelerator_overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput">container_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput">inference_accelerator_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput">task_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_overrides`<sup>Required</sup> <a name="container_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides"></a>

```python
container_overrides: DataAwsEcsTaskExecutionOverridesContainerOverridesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a>

---

##### `inference_accelerator_overrides`<sup>Required</sup> <a name="inference_accelerator_overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides"></a>

```python
inference_accelerator_overrides: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a>

---

##### `container_overrides_input`<sup>Optional</sup> <a name="container_overrides_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput"></a>

```python
container_overrides_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesContainerOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>]]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `inference_accelerator_overrides_input`<sup>Optional</sup> <a name="inference_accelerator_overrides_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput"></a>

```python
inference_accelerator_overrides_input: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>]]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `task_role_arn_input`<sup>Optional</sup> <a name="task_role_arn_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput"></a>

```python
task_role_arn_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `task_role_arn`<sup>Required</sup> <a name="task_role_arn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEcsTaskExecutionOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---


### DataAwsEcsTaskExecutionPlacementConstraintsList <a name="DataAwsEcsTaskExecutionPlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]]

---


### DataAwsEcsTaskExecutionPlacementConstraintsOutputReference <a name="DataAwsEcsTaskExecutionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionPlacementConstraints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>]

---


### DataAwsEcsTaskExecutionPlacementStrategyList <a name="DataAwsEcsTaskExecutionPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEcsTaskExecutionPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEcsTaskExecutionPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]]

---


### DataAwsEcsTaskExecutionPlacementStrategyOutputReference <a name="DataAwsEcsTaskExecutionPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecs_task_execution

dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEcsTaskExecutionPlacementStrategy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>]

---



