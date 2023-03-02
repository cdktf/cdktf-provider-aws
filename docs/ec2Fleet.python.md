# `ec2Fleet` Submodule <a name="`ec2Fleet` Submodule" id="@cdktf/provider-aws.ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Fleet <a name="Ec2Fleet" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet aws_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2Fleet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  launch_template_config: Ec2FleetLaunchTemplateConfig,
  target_capacity_specification: Ec2FleetTargetCapacitySpecification,
  context: str = None,
  excess_capacity_termination_policy: str = None,
  id: str = None,
  on_demand_options: Ec2FleetOnDemandOptions = None,
  replace_unhealthy_instances: typing.Union[bool, IResolvable] = None,
  spot_options: Ec2FleetSpotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  terminate_instances: typing.Union[bool, IResolvable] = None,
  terminate_instances_with_expiration: typing.Union[bool, IResolvable] = None,
  timeouts: Ec2FleetTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.launchTemplateConfig">launch_template_config</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.targetCapacitySpecification">target_capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | target_capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.onDemandOptions">on_demand_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | on_demand_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.spotOptions">spot_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | spot_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstances">terminate_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `launch_template_config`<sup>Required</sup> <a name="launch_template_config" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.launchTemplateConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}

---

##### `target_capacity_specification`<sup>Required</sup> <a name="target_capacity_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.targetCapacitySpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

target_capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.context"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}.

---

##### `excess_capacity_termination_policy`<sup>Optional</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.excessCapacityTerminationPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_demand_options`<sup>Optional</sup> <a name="on_demand_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.onDemandOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

on_demand_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}

---

##### `replace_unhealthy_instances`<sup>Optional</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.replaceUnhealthyInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.

---

##### `spot_options`<sup>Optional</sup> <a name="spot_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.spotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_options Ec2Fleet#spot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}.

---

##### `terminate_instances`<sup>Optional</sup> <a name="terminate_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}.

---

##### `terminate_instances_with_expiration`<sup>Optional</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstancesWithExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#timeouts Ec2Fleet#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig">put_launch_template_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions">put_on_demand_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions">put_spot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification">put_target_capacity_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy">reset_excess_capacity_termination_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions">reset_on_demand_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances">reset_replace_unhealthy_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions">reset_spot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances">reset_terminate_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration">reset_terminate_instances_with_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_launch_template_config` <a name="put_launch_template_config" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig"></a>

```python
def put_launch_template_config(
  launch_template_specification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification,
  override: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]] = None
) -> None
```

###### `launch_template_specification`<sup>Required</sup> <a name="launch_template_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig.parameter.launchTemplateSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}

---

###### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig.parameter.override"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]

override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#override Ec2Fleet#override}

---

##### `put_on_demand_options` <a name="put_on_demand_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions"></a>

```python
def put_on_demand_options(
  allocation_strategy: str = None
) -> None
```

###### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

##### `put_spot_options` <a name="put_spot_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions"></a>

```python
def put_spot_options(
  allocation_strategy: str = None,
  instance_interruption_behavior: str = None,
  instance_pools_to_use_count: typing.Union[int, float] = None,
  maintenance_strategies: Ec2FleetSpotOptionsMaintenanceStrategies = None
) -> None
```

###### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

###### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.instanceInterruptionBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}.

---

###### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.instancePoolsToUseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}.

---

###### `maintenance_strategies`<sup>Optional</sup> <a name="maintenance_strategies" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.maintenanceStrategies"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}

---

##### `put_target_capacity_specification` <a name="put_target_capacity_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification"></a>

```python
def put_target_capacity_specification(
  default_target_capacity_type: str,
  total_target_capacity: typing.Union[int, float],
  on_demand_target_capacity: typing.Union[int, float] = None,
  spot_target_capacity: typing.Union[int, float] = None,
  target_capacity_unit_type: str = None
) -> None
```

###### `default_target_capacity_type`<sup>Required</sup> <a name="default_target_capacity_type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.defaultTargetCapacityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}.

---

###### `total_target_capacity`<sup>Required</sup> <a name="total_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.totalTargetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}.

---

###### `on_demand_target_capacity`<sup>Optional</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.onDemandTargetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}.

---

###### `spot_target_capacity`<sup>Optional</sup> <a name="spot_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.spotTargetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}.

---

###### `target_capacity_unit_type`<sup>Optional</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.targetCapacityUnitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}.

---

##### `reset_context` <a name="reset_context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_excess_capacity_termination_policy` <a name="reset_excess_capacity_termination_policy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy"></a>

```python
def reset_excess_capacity_termination_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_demand_options` <a name="reset_on_demand_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions"></a>

```python
def reset_on_demand_options() -> None
```

##### `reset_replace_unhealthy_instances` <a name="reset_replace_unhealthy_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances"></a>

```python
def reset_replace_unhealthy_instances() -> None
```

##### `reset_spot_options` <a name="reset_spot_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions"></a>

```python
def reset_spot_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_terminate_instances` <a name="reset_terminate_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances"></a>

```python
def reset_terminate_instances() -> None
```

##### `reset_terminate_instances_with_expiration` <a name="reset_terminate_instances_with_expiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration"></a>

```python
def reset_terminate_instances_with_expiration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2Fleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2Fleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2Fleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig">launch_template_config</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions">on_demand_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions">spot_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification">target_capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput">excess_capacity_termination_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput">launch_template_config_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput">on_demand_options_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput">replace_unhealthy_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput">spot_options_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput">target_capacity_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput">terminate_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput">terminate_instances_with_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances">terminate_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `launch_template_config`<sup>Required</sup> <a name="launch_template_config" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig"></a>

```python
launch_template_config: Ec2FleetLaunchTemplateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a>

---

##### `on_demand_options`<sup>Required</sup> <a name="on_demand_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions"></a>

```python
on_demand_options: Ec2FleetOnDemandOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `spot_options`<sup>Required</sup> <a name="spot_options" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions"></a>

```python
spot_options: Ec2FleetSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a>

---

##### `target_capacity_specification`<sup>Required</sup> <a name="target_capacity_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification"></a>

```python
target_capacity_specification: Ec2FleetTargetCapacitySpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts"></a>

```python
timeouts: Ec2FleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a>

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `excess_capacity_termination_policy_input`<sup>Optional</sup> <a name="excess_capacity_termination_policy_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput"></a>

```python
excess_capacity_termination_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `launch_template_config_input`<sup>Optional</sup> <a name="launch_template_config_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput"></a>

```python
launch_template_config_input: Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---

##### `on_demand_options_input`<sup>Optional</sup> <a name="on_demand_options_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput"></a>

```python
on_demand_options_input: Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---

##### `replace_unhealthy_instances_input`<sup>Optional</sup> <a name="replace_unhealthy_instances_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput"></a>

```python
replace_unhealthy_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_options_input`<sup>Optional</sup> <a name="spot_options_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput"></a>

```python
spot_options_input: Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_capacity_specification_input`<sup>Optional</sup> <a name="target_capacity_specification_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput"></a>

```python
target_capacity_specification_input: Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---

##### `terminate_instances_input`<sup>Optional</sup> <a name="terminate_instances_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput"></a>

```python
terminate_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminate_instances_with_expiration_input`<sup>Optional</sup> <a name="terminate_instances_with_expiration_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput"></a>

```python
terminate_instances_with_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Ec2FleetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `excess_capacity_termination_policy`<sup>Required</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```python
excess_capacity_termination_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replace_unhealthy_instances`<sup>Required</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances"></a>

```python
replace_unhealthy_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `terminate_instances`<sup>Required</sup> <a name="terminate_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances"></a>

```python
terminate_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminate_instances_with_expiration`<sup>Required</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```python
terminate_instances_with_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FleetConfig <a name="Ec2FleetConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  launch_template_config: Ec2FleetLaunchTemplateConfig,
  target_capacity_specification: Ec2FleetTargetCapacitySpecification,
  context: str = None,
  excess_capacity_termination_policy: str = None,
  id: str = None,
  on_demand_options: Ec2FleetOnDemandOptions = None,
  replace_unhealthy_instances: typing.Union[bool, IResolvable] = None,
  spot_options: Ec2FleetSpotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  terminate_instances: typing.Union[bool, IResolvable] = None,
  terminate_instances_with_expiration: typing.Union[bool, IResolvable] = None,
  timeouts: Ec2FleetTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig">launch_template_config</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification">target_capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | target_capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions">on_demand_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | on_demand_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions">spot_options</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | spot_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances">terminate_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `launch_template_config`<sup>Required</sup> <a name="launch_template_config" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig"></a>

```python
launch_template_config: Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}

---

##### `target_capacity_specification`<sup>Required</sup> <a name="target_capacity_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification"></a>

```python
target_capacity_specification: Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

target_capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}.

---

##### `excess_capacity_termination_policy`<sup>Optional</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy"></a>

```python
excess_capacity_termination_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_demand_options`<sup>Optional</sup> <a name="on_demand_options" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions"></a>

```python
on_demand_options: Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

on_demand_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}

---

##### `replace_unhealthy_instances`<sup>Optional</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances"></a>

```python
replace_unhealthy_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.

---

##### `spot_options`<sup>Optional</sup> <a name="spot_options" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions"></a>

```python
spot_options: Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_options Ec2Fleet#spot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}.

---

##### `terminate_instances`<sup>Optional</sup> <a name="terminate_instances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances"></a>

```python
terminate_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}.

---

##### `terminate_instances_with_expiration`<sup>Optional</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration"></a>

```python
terminate_instances_with_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts"></a>

```python
timeouts: Ec2FleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#timeouts Ec2Fleet#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}.

---

### Ec2FleetLaunchTemplateConfig <a name="Ec2FleetLaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfig(
  launch_template_specification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification,
  override: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification">launch_template_specification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override">override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]</code> | override block. |

---

##### `launch_template_specification`<sup>Required</sup> <a name="launch_template_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```python
launch_template_specification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override"></a>

```python
override: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]

override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#override Ec2Fleet#override}

---

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification(
  version: str,
  launch_template_id: str = None,
  launch_template_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}.

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}.

---

##### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}.

---

### Ec2FleetLaunchTemplateConfigOverride <a name="Ec2FleetLaunchTemplateConfigOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverride(
  availability_zone: str = None,
  instance_requirements: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements = None,
  instance_type: str = None,
  max_price: str = None,
  priority: typing.Union[int, float] = None,
  subnet_id: str = None,
  weighted_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice">max_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}.

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements"></a>

```python
instance_requirements: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_requirements Ec2Fleet#instance_requirements}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}.

---

##### `max_price`<sup>Optional</sup> <a name="max_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice"></a>

```python
max_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}.

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements(
  memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib,
  vcpu_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount,
  accelerator_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu = None,
  network_interface_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal">bare_metal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage">local_storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib"></a>

```python
memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_mib Ec2Fleet#memory_mib}

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount"></a>

```python
vcpu_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#vcpu_count Ec2Fleet#vcpu_count}

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount"></a>

```python
accelerator_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_count Ec2Fleet#accelerator_count}

---

##### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}.

---

##### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}.

---

##### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_total_memory_mib Ec2Fleet#accelerator_total_memory_mib}

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}.

---

##### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}.

---

##### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Fleet#baseline_ebs_bandwidth_mbps}

---

##### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}.

---

##### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}.

---

##### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}.

---

##### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}.

---

##### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}.

---

##### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}.

---

##### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_gib_per_vcpu Ec2Fleet#memory_gib_per_vcpu}

---

##### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount"></a>

```python
network_interface_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#network_interface_count Ec2Fleet#network_interface_count}

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}.

---

##### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}.

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}.

---

##### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_local_storage_gb Ec2Fleet#total_local_storage_gb}

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetOnDemandOptions <a name="Ec2FleetOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetOnDemandOptions(
  allocation_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

### Ec2FleetSpotOptions <a name="Ec2FleetSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptions(
  allocation_strategy: str = None,
  instance_interruption_behavior: str = None,
  instance_pools_to_use_count: typing.Union[int, float] = None,
  maintenance_strategies: Ec2FleetSpotOptionsMaintenanceStrategies = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies">maintenance_strategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | maintenance_strategies block. |

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

##### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}.

---

##### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}.

---

##### `maintenance_strategies`<sup>Optional</sup> <a name="maintenance_strategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies"></a>

```python
maintenance_strategies: Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}

---

### Ec2FleetSpotOptionsMaintenanceStrategies <a name="Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies(
  capacity_rebalance: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance">capacity_rebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `capacity_rebalance`<sup>Optional</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance"></a>

```python
capacity_rebalance: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}

---

### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance(
  replacement_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">replacement_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}. |

---

##### `replacement_strategy`<sup>Optional</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```python
replacement_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}.

---

### Ec2FleetTargetCapacitySpecification <a name="Ec2FleetTargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetTargetCapacitySpecification(
  default_target_capacity_type: str,
  total_target_capacity: typing.Union[int, float],
  on_demand_target_capacity: typing.Union[int, float] = None,
  spot_target_capacity: typing.Union[int, float] = None,
  target_capacity_unit_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType">default_target_capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity">total_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity">on_demand_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity">spot_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType">target_capacity_unit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}. |

---

##### `default_target_capacity_type`<sup>Required</sup> <a name="default_target_capacity_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType"></a>

```python
default_target_capacity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}.

---

##### `total_target_capacity`<sup>Required</sup> <a name="total_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity"></a>

```python
total_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}.

---

##### `on_demand_target_capacity`<sup>Optional</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity"></a>

```python
on_demand_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}.

---

##### `spot_target_capacity`<sup>Optional</sup> <a name="spot_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity"></a>

```python
spot_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}.

---

##### `target_capacity_unit_type`<sup>Optional</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType"></a>

```python
target_capacity_unit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}.

---

### Ec2FleetTimeouts <a name="Ec2FleetTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">reset_launch_template_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_launch_template_name` <a name="reset_launch_template_name" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```python
def reset_launch_template_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launch_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `launch_template_name_input`<sup>Optional</sup> <a name="launch_template_name_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```python
launch_template_name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### Ec2FleetLaunchTemplateConfigOutputReference <a name="Ec2FleetLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">put_launch_template_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride">put_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride">reset_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_launch_template_specification` <a name="put_launch_template_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```python
def put_launch_template_specification(
  version: str,
  launch_template_id: str = None,
  launch_template_name: str = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}.

---

###### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.launchTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}.

---

###### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.launchTemplateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}.

---

##### `put_override` <a name="put_override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride"></a>

```python
def put_override(
  value: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]

---

##### `reset_override` <a name="reset_override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride"></a>

```python
def reset_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">launch_template_specification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">launch_template_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_specification`<sup>Required</sup> <a name="launch_template_specification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```python
launch_template_specification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override"></a>

```python
override: Ec2FleetLaunchTemplateConfigOverrideList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a>

---

##### `launch_template_specification_input`<sup>Optional</sup> <a name="launch_template_specification_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```python
launch_template_specification_input: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount">put_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">put_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">put_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu">put_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib">put_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount">put_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb">put_total_local_storage_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount">put_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers">reset_accelerator_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames">reset_accelerator_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">reset_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes">reset_accelerator_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal">reset_bare_metal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">reset_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance">reset_burstable_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers">reset_cpu_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes">reset_excluded_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations">reset_instance_generations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage">reset_local_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes">reset_local_storage_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">reset_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount">reset_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">reset_on_demand_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport">reset_require_hibernate_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">reset_spot_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb">reset_total_local_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_count` <a name="put_accelerator_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```python
def put_accelerator_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_accelerator_total_memory_mib` <a name="put_accelerator_total_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```python
def put_accelerator_total_memory_mib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_baseline_ebs_bandwidth_mbps` <a name="put_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```python
def put_baseline_ebs_bandwidth_mbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_memory_gib_per_vcpu` <a name="put_memory_gib_per_vcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```python
def put_memory_gib_per_vcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_memory_mib` <a name="put_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib"></a>

```python
def put_memory_mib(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
) -> None
```

###### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `put_network_interface_count` <a name="put_network_interface_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```python
def put_network_interface_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_total_local_storage_gb` <a name="put_total_local_storage_gb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```python
def put_total_local_storage_gb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `put_vcpu_count` <a name="put_vcpu_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount"></a>

```python
def put_vcpu_count(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
) -> None
```

###### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_manufacturers` <a name="reset_accelerator_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```python
def reset_accelerator_manufacturers() -> None
```

##### `reset_accelerator_names` <a name="reset_accelerator_names" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```python
def reset_accelerator_names() -> None
```

##### `reset_accelerator_total_memory_mib` <a name="reset_accelerator_total_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```python
def reset_accelerator_total_memory_mib() -> None
```

##### `reset_accelerator_types` <a name="reset_accelerator_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```python
def reset_accelerator_types() -> None
```

##### `reset_bare_metal` <a name="reset_bare_metal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal"></a>

```python
def reset_bare_metal() -> None
```

##### `reset_baseline_ebs_bandwidth_mbps` <a name="reset_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```python
def reset_baseline_ebs_bandwidth_mbps() -> None
```

##### `reset_burstable_performance` <a name="reset_burstable_performance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```python
def reset_burstable_performance() -> None
```

##### `reset_cpu_manufacturers` <a name="reset_cpu_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```python
def reset_cpu_manufacturers() -> None
```

##### `reset_excluded_instance_types` <a name="reset_excluded_instance_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```python
def reset_excluded_instance_types() -> None
```

##### `reset_instance_generations` <a name="reset_instance_generations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```python
def reset_instance_generations() -> None
```

##### `reset_local_storage` <a name="reset_local_storage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage"></a>

```python
def reset_local_storage() -> None
```

##### `reset_local_storage_types` <a name="reset_local_storage_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```python
def reset_local_storage_types() -> None
```

##### `reset_memory_gib_per_vcpu` <a name="reset_memory_gib_per_vcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```python
def reset_memory_gib_per_vcpu() -> None
```

##### `reset_network_interface_count` <a name="reset_network_interface_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```python
def reset_network_interface_count() -> None
```

##### `reset_on_demand_max_price_percentage_over_lowest_price` <a name="reset_on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```python
def reset_on_demand_max_price_percentage_over_lowest_price() -> None
```

##### `reset_require_hibernate_support` <a name="reset_require_hibernate_support" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```python
def reset_require_hibernate_support() -> None
```

##### `reset_spot_max_price_percentage_over_lowest_price` <a name="reset_spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```python
def reset_spot_max_price_percentage_over_lowest_price() -> None
```

##### `reset_total_local_storage_gb` <a name="reset_total_local_storage_gb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```python
def reset_total_local_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">accelerator_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput">accelerator_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">accelerator_total_memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput">accelerator_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput">bare_metal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baseline_ebs_bandwidth_mbps_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstable_performance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpu_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excluded_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput">instance_generations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput">local_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput">local_storage_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memory_gib_per_vcpu_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput">memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput">network_interface_count_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">on_demand_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput">require_hibernate_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spot_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">total_local_storage_gb_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput">vcpu_count_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal">bare_metal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage">local_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `accelerator_total_memory_mib`<sup>Required</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baseline_ebs_bandwidth_mbps`<sup>Required</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memory_gib_per_vcpu`<sup>Required</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib"></a>

```python
memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a>

---

##### `network_interface_count`<sup>Required</sup> <a name="network_interface_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```python
network_interface_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `total_local_storage_gb`<sup>Required</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount"></a>

```python
vcpu_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a>

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `accelerator_manufacturers_input`<sup>Optional</sup> <a name="accelerator_manufacturers_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```python
accelerator_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names_input`<sup>Optional</sup> <a name="accelerator_names_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```python
accelerator_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_total_memory_mib_input`<sup>Optional</sup> <a name="accelerator_total_memory_mib_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```python
accelerator_total_memory_mib_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `accelerator_types_input`<sup>Optional</sup> <a name="accelerator_types_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```python
accelerator_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal_input`<sup>Optional</sup> <a name="bare_metal_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```python
bare_metal_input: str
```

- *Type:* str

---

##### `baseline_ebs_bandwidth_mbps_input`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```python
baseline_ebs_bandwidth_mbps_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstable_performance_input`<sup>Optional</sup> <a name="burstable_performance_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```python
burstable_performance_input: str
```

- *Type:* str

---

##### `cpu_manufacturers_input`<sup>Optional</sup> <a name="cpu_manufacturers_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```python
cpu_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types_input`<sup>Optional</sup> <a name="excluded_instance_types_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```python
excluded_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations_input`<sup>Optional</sup> <a name="instance_generations_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```python
instance_generations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage_input`<sup>Optional</sup> <a name="local_storage_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput"></a>

```python
local_storage_input: str
```

- *Type:* str

---

##### `local_storage_types_input`<sup>Optional</sup> <a name="local_storage_types_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```python
local_storage_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_gib_per_vcpu_input`<sup>Optional</sup> <a name="memory_gib_per_vcpu_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```python
memory_gib_per_vcpu_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memory_mib_input`<sup>Optional</sup> <a name="memory_mib_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```python
memory_mib_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---

##### `network_interface_count_input`<sup>Optional</sup> <a name="network_interface_count_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```python
network_interface_count_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `on_demand_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```python
on_demand_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support_input`<sup>Optional</sup> <a name="require_hibernate_support_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```python
require_hibernate_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```python
spot_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_local_storage_gb_input`<sup>Optional</sup> <a name="total_local_storage_gb_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```python
total_local_storage_gb_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpu_count_input`<sup>Optional</sup> <a name="vcpu_count_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```python
vcpu_count_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---

##### `accelerator_manufacturers`<sup>Required</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names`<sup>Required</sup> <a name="accelerator_names" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal`<sup>Required</sup> <a name="bare_metal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

---

##### `burstable_performance`<sup>Required</sup> <a name="burstable_performance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

---

##### `cpu_manufacturers`<sup>Required</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations`<sup>Required</sup> <a name="instance_generations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage`<sup>Required</sup> <a name="local_storage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

---

##### `local_storage_types`<sup>Required</sup> <a name="local_storage_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support`<sup>Required</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax">reset_max</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideList <a name="Ec2FleetLaunchTemplateConfigOverrideList" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FleetLaunchTemplateConfigOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Ec2FleetLaunchTemplateConfigOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>]]

---


### Ec2FleetLaunchTemplateConfigOverrideOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements">put_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements">reset_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice">reset_max_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_requirements` <a name="put_instance_requirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements"></a>

```python
def put_instance_requirements(
  memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib,
  vcpu_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount,
  accelerator_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu = None,
  network_interface_count: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb = None
) -> None
```

###### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.memoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_mib Ec2Fleet#memory_mib}

---

###### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.vcpuCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#vcpu_count Ec2Fleet#vcpu_count}

---

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.acceleratorCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_count Ec2Fleet#accelerator_count}

---

###### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.acceleratorManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}.

---

###### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.acceleratorNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}.

---

###### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.acceleratorTotalMemoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_total_memory_mib Ec2Fleet#accelerator_total_memory_mib}

---

###### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.acceleratorTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}.

---

###### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.bareMetal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}.

---

###### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.baselineEbsBandwidthMbps"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Fleet#baseline_ebs_bandwidth_mbps}

---

###### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.burstablePerformance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}.

---

###### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.cpuManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}.

---

###### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.excludedInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}.

---

###### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.instanceGenerations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}.

---

###### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.localStorage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}.

---

###### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.localStorageTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}.

---

###### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.memoryGibPerVcpu"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_gib_per_vcpu Ec2Fleet#memory_gib_per_vcpu}

---

###### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.networkInterfaceCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#network_interface_count Ec2Fleet#network_interface_count}

---

###### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.onDemandMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}.

---

###### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.requireHibernateSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}.

---

###### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.spotMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}.

---

###### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.totalLocalStorageGb"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_local_storage_gb Ec2Fleet#total_local_storage_gb}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_instance_requirements` <a name="reset_instance_requirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements"></a>

```python
def reset_instance_requirements() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_max_price` <a name="reset_max_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice"></a>

```python
def reset_max_price() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput">instance_requirements_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput">max_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice">max_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_requirements`<sup>Required</sup> <a name="instance_requirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements"></a>

```python
instance_requirements: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `instance_requirements_input`<sup>Optional</sup> <a name="instance_requirements_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput"></a>

```python
instance_requirements_input: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `max_price_input`<sup>Optional</sup> <a name="max_price_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput"></a>

```python
max_price_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `max_price`<sup>Required</sup> <a name="max_price" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice"></a>

```python
max_price: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2FleetLaunchTemplateConfigOverride, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>, cdktf.IResolvable]

---


### Ec2FleetOnDemandOptionsOutputReference <a name="Ec2FleetOnDemandOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetOnDemandOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy">reset_allocation_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_strategy` <a name="reset_allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy"></a>

```python
def reset_allocation_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">reset_replacement_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replacement_strategy` <a name="reset_replacement_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```python
def reset_replacement_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">replacement_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replacement_strategy_input`<sup>Optional</sup> <a name="replacement_strategy_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```python
replacement_strategy_input: str
```

- *Type:* str

---

##### `replacement_strategy`<sup>Required</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```python
replacement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance">put_capacity_rebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance">reset_capacity_rebalance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_rebalance` <a name="put_capacity_rebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```python
def put_capacity_rebalance(
  replacement_strategy: str = None
) -> None
```

###### `replacement_strategy`<sup>Optional</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.replacementStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}.

---

##### `reset_capacity_rebalance` <a name="reset_capacity_rebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```python
def reset_capacity_rebalance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">capacity_rebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">capacity_rebalance_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_rebalance`<sup>Required</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```python
capacity_rebalance: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `capacity_rebalance_input`<sup>Optional</sup> <a name="capacity_rebalance_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```python
capacity_rebalance_input: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### Ec2FleetSpotOptionsOutputReference <a name="Ec2FleetSpotOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetSpotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies">put_maintenance_strategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy">reset_allocation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior">reset_instance_interruption_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount">reset_instance_pools_to_use_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies">reset_maintenance_strategies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_strategies` <a name="put_maintenance_strategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies"></a>

```python
def put_maintenance_strategies(
  capacity_rebalance: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance = None
) -> None
```

###### `capacity_rebalance`<sup>Optional</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies.parameter.capacityRebalance"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}

---

##### `reset_allocation_strategy` <a name="reset_allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy"></a>

```python
def reset_allocation_strategy() -> None
```

##### `reset_instance_interruption_behavior` <a name="reset_instance_interruption_behavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```python
def reset_instance_interruption_behavior() -> None
```

##### `reset_instance_pools_to_use_count` <a name="reset_instance_pools_to_use_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount"></a>

```python
def reset_instance_pools_to_use_count() -> None
```

##### `reset_maintenance_strategies` <a name="reset_maintenance_strategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies"></a>

```python
def reset_maintenance_strategies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">maintenance_strategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">instance_interruption_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput">instance_pools_to_use_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput">maintenance_strategies_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_strategies`<sup>Required</sup> <a name="maintenance_strategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```python
maintenance_strategies: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `instance_interruption_behavior_input`<sup>Optional</sup> <a name="instance_interruption_behavior_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```python
instance_interruption_behavior_input: str
```

- *Type:* str

---

##### `instance_pools_to_use_count_input`<sup>Optional</sup> <a name="instance_pools_to_use_count_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput"></a>

```python
instance_pools_to_use_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_strategies_input`<sup>Optional</sup> <a name="maintenance_strategies_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput"></a>

```python
maintenance_strategies_input: Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `instance_interruption_behavior`<sup>Required</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

---

##### `instance_pools_to_use_count`<sup>Required</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---


### Ec2FleetTargetCapacitySpecificationOutputReference <a name="Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity">reset_on_demand_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity">reset_spot_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType">reset_target_capacity_unit_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_demand_target_capacity` <a name="reset_on_demand_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity"></a>

```python
def reset_on_demand_target_capacity() -> None
```

##### `reset_spot_target_capacity` <a name="reset_spot_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity"></a>

```python
def reset_spot_target_capacity() -> None
```

##### `reset_target_capacity_unit_type` <a name="reset_target_capacity_unit_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType"></a>

```python
def reset_target_capacity_unit_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput">default_target_capacity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput">on_demand_target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput">spot_target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput">target_capacity_unit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput">total_target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">default_target_capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">on_demand_target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">spot_target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">target_capacity_unit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">total_target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_target_capacity_type_input`<sup>Optional</sup> <a name="default_target_capacity_type_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput"></a>

```python
default_target_capacity_type_input: str
```

- *Type:* str

---

##### `on_demand_target_capacity_input`<sup>Optional</sup> <a name="on_demand_target_capacity_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput"></a>

```python
on_demand_target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_target_capacity_input`<sup>Optional</sup> <a name="spot_target_capacity_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput"></a>

```python
spot_target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_capacity_unit_type_input`<sup>Optional</sup> <a name="target_capacity_unit_type_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput"></a>

```python
target_capacity_unit_type_input: str
```

- *Type:* str

---

##### `total_target_capacity_input`<sup>Optional</sup> <a name="total_target_capacity_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput"></a>

```python
total_target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_target_capacity_type`<sup>Required</sup> <a name="default_target_capacity_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```python
default_target_capacity_type: str
```

- *Type:* str

---

##### `on_demand_target_capacity`<sup>Required</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```python
on_demand_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_target_capacity`<sup>Required</sup> <a name="spot_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```python
spot_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_capacity_unit_type`<sup>Required</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```python
target_capacity_unit_type: str
```

- *Type:* str

---

##### `total_target_capacity`<sup>Required</sup> <a name="total_target_capacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```python
total_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```python
internal_value: Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---


### Ec2FleetTimeoutsOutputReference <a name="Ec2FleetTimeoutsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_fleet

ec2Fleet.Ec2FleetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2FleetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>, cdktf.IResolvable]

---



