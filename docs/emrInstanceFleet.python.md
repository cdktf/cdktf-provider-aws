# `emrInstanceFleet` Submodule <a name="`emrInstanceFleet` Submodule" id="@cdktf/provider-aws.emrInstanceFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrInstanceFleet <a name="EmrInstanceFleet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet aws_emr_instance_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.instanceTypeConfigs">instance_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.instanceTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type_configs EmrInstanceFleet#instance_type_configs}

---

##### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.launchSpecifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#launch_specifications EmrInstanceFleet#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}.

---

##### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.targetOnDemandCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}.

---

##### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.targetSpotCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs">put_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications">put_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetInstanceTypeConfigs">reset_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetLaunchSpecifications">reset_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetOnDemandCapacity">reset_target_on_demand_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetSpotCapacity">reset_target_spot_capacity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_instance_type_configs` <a name="put_instance_type_configs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs"></a>

```python
def put_instance_type_configs(
  value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]

---

##### `put_launch_specifications` <a name="put_launch_specifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications"></a>

```python
def put_launch_specifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]] = None
) -> None
```

###### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications.parameter.onDemandSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#on_demand_specification EmrInstanceFleet#on_demand_specification}

---

###### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications.parameter.spotSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#spot_specification EmrInstanceFleet#spot_specification}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_type_configs` <a name="reset_instance_type_configs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetInstanceTypeConfigs"></a>

```python
def reset_instance_type_configs() -> None
```

##### `reset_launch_specifications` <a name="reset_launch_specifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetLaunchSpecifications"></a>

```python
def reset_launch_specifications() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_on_demand_capacity` <a name="reset_target_on_demand_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetOnDemandCapacity"></a>

```python
def reset_target_on_demand_capacity() -> None
```

##### `reset_target_spot_capacity` <a name="reset_target_spot_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetSpotCapacity"></a>

```python
def reset_target_spot_capacity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigs">instance_type_configs</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList">EmrInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference">EmrInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedOnDemandCapacity">provisioned_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedSpotCapacity">provisioned_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigsInput">instance_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecificationsInput">launch_specifications_input</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacityInput">target_on_demand_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacityInput">target_spot_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_type_configs`<sup>Required</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigs"></a>

```python
instance_type_configs: EmrInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList">EmrInstanceFleetInstanceTypeConfigsList</a>

---

##### `launch_specifications`<sup>Required</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecifications"></a>

```python
launch_specifications: EmrInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference">EmrInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisioned_on_demand_capacity`<sup>Required</sup> <a name="provisioned_on_demand_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedOnDemandCapacity"></a>

```python
provisioned_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_spot_capacity`<sup>Required</sup> <a name="provisioned_spot_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedSpotCapacity"></a>

```python
provisioned_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_type_configs_input`<sup>Optional</sup> <a name="instance_type_configs_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigsInput"></a>

```python
instance_type_configs_input: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]

---

##### `launch_specifications_input`<sup>Optional</sup> <a name="launch_specifications_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecificationsInput"></a>

```python
launch_specifications_input: EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_on_demand_capacity_input`<sup>Optional</sup> <a name="target_on_demand_capacity_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacityInput"></a>

```python
target_on_demand_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity_input`<sup>Optional</sup> <a name="target_spot_capacity_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacityInput"></a>

```python
target_spot_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_on_demand_capacity`<sup>Required</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity`<sup>Required</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrInstanceFleetConfig <a name="EmrInstanceFleetConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.instanceTypeConfigs">instance_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.instanceTypeConfigs"></a>

```python
instance_type_configs: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type_configs EmrInstanceFleet#instance_type_configs}

---

##### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.launchSpecifications"></a>

```python
launch_specifications: EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#launch_specifications EmrInstanceFleet#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}.

---

##### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}.

---

##### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}.

---

### EmrInstanceFleetInstanceTypeConfigs <a name="EmrInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs(
  instance_type: str,
  bid_price: str = None,
  bid_price_as_percentage_of_on_demand_price: typing.Union[int, float] = None,
  configurations: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsConfigurations]] = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsEbsConfig]] = None,
  weighted_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type EmrInstanceFleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPrice">bid_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price EmrInstanceFleet#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebs_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#weighted_capacity EmrInstanceFleet#weighted_capacity}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type EmrInstanceFleet#instance_type}.

---

##### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price EmrInstanceFleet#bid_price}.

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```python
configurations: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#configurations EmrInstanceFleet#configurations}

---

##### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```python
ebs_config: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#ebs_config EmrInstanceFleet#ebs_config}

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#weighted_capacity EmrInstanceFleet#weighted_capacity}.

---

### EmrInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations(
  classification: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#classification EmrInstanceFleet#classification}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#properties EmrInstanceFleet#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#classification EmrInstanceFleet#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#properties EmrInstanceFleet#properties}.

---

### EmrInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig(
  size: typing.Union[int, float],
  type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#size EmrInstanceFleet#size}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#type EmrInstanceFleet#type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#iops EmrInstanceFleet#iops}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#volumes_per_instance EmrInstanceFleet#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#size EmrInstanceFleet#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#type EmrInstanceFleet#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#iops EmrInstanceFleet#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#volumes_per_instance EmrInstanceFleet#volumes_per_instance}.

---

### EmrInstanceFleetLaunchSpecifications <a name="EmrInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.onDemandSpecification">on_demand_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.spotSpecification">spot_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | spot_specification block. |

---

##### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```python
on_demand_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#on_demand_specification EmrInstanceFleet#on_demand_specification}

---

##### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```python
spot_specification: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#spot_specification EmrInstanceFleet#spot_specification}

---

### EmrInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification(
  allocation_strategy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}.

---

### EmrInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification(
  allocation_strategy: str,
  timeout_action: str,
  timeout_duration_minutes: typing.Union[int, float],
  block_duration_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_action EmrInstanceFleet#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#block_duration_minutes EmrInstanceFleet#block_duration_minutes}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}.

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_action EmrInstanceFleet#timeout_action}.

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}.

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#block_duration_minutes EmrInstanceFleet#block_duration_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---


### EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrInstanceFleetInstanceTypeConfigsConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]

---


### EmrInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---


### EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrInstanceFleetInstanceTypeConfigsEbsConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]

---


### EmrInstanceFleetInstanceTypeConfigsList <a name="EmrInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>]]

---


### EmrInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">put_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">put_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">reset_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">reset_bid_price_as_percentage_of_on_demand_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">reset_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">reset_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configurations` <a name="put_configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```python
def put_configurations(
  value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `put_ebs_config` <a name="put_ebs_config" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```python
def put_ebs_config(
  value: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsEbsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `reset_bid_price` <a name="reset_bid_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```python
def reset_bid_price() -> None
```

##### `reset_bid_price_as_percentage_of_on_demand_price` <a name="reset_bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```python
def reset_bid_price_as_percentage_of_on_demand_price() -> None
```

##### `reset_configurations` <a name="reset_configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```python
def reset_configurations() -> None
```

##### `reset_ebs_config` <a name="reset_ebs_config" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```python
def reset_ebs_config() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList">EmrInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebs_config</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList">EmrInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bid_price_as_percentage_of_on_demand_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bid_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bid_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```python
configurations: EmrInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList">EmrInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebs_config`<sup>Required</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```python
ebs_config: EmrInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList">EmrInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bid_price_as_percentage_of_on_demand_price_input`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```python
bid_price_as_percentage_of_on_demand_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price_input`<sup>Optional</sup> <a name="bid_price_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```python
bid_price_input: str
```

- *Type:* str

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```python
configurations_input: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations">EmrInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `ebs_config_input`<sup>Optional</sup> <a name="ebs_config_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```python
ebs_config_input: typing.Union[IResolvable, typing.List[EmrInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig">EmrInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price`<sup>Required</sup> <a name="bid_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Required</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrInstanceFleetInstanceTypeConfigs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs">EmrInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]

---


### EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---


### EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]

---


### EmrInstanceFleetLaunchSpecificationsOutputReference <a name="EmrInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">put_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">put_spot_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">reset_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">reset_spot_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_demand_specification` <a name="put_on_demand_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```python
def put_on_demand_specification(
  value: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `put_spot_specification` <a name="put_spot_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```python
def put_spot_specification(
  value: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `reset_on_demand_specification` <a name="reset_on_demand_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```python
def reset_on_demand_specification() -> None
```

##### `reset_spot_specification` <a name="reset_spot_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```python
def reset_spot_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">on_demand_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spot_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">on_demand_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spot_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand_specification`<sup>Required</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```python
on_demand_specification: EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spot_specification`<sup>Required</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```python
spot_specification: EmrInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `on_demand_specification_input`<sup>Optional</sup> <a name="on_demand_specification_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```python
on_demand_specification_input: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `spot_specification_input`<sup>Optional</sup> <a name="spot_specification_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```python
spot_specification_input: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

---


### EmrInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---


### EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_instance_fleet

emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">reset_block_duration_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_duration_minutes` <a name="reset_block_duration_minutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```python
def reset_block_duration_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">block_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeout_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `block_duration_minutes_input`<sup>Optional</sup> <a name="block_duration_minutes_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```python
block_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `timeout_duration_minutes_input`<sup>Optional</sup> <a name="timeout_duration_minutes_input" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```python
timeout_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrInstanceFleetLaunchSpecificationsSpotSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification">EmrInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]

---



