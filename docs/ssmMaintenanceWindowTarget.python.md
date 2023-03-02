# `ssmMaintenanceWindowTarget` Submodule <a name="`ssmMaintenanceWindowTarget` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTarget <a name="SsmMaintenanceWindowTarget" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target aws_ssm_maintenance_window_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_type: str,
  targets: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]],
  window_id: str,
  description: str = None,
  id: str = None,
  name: str = None,
  owner_information: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.windowId">window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.ownerInformation">owner_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.targets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.windowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}.

---

##### `owner_information`<sup>Optional</sup> <a name="owner_information" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.ownerInformation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation">reset_owner_information</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_targets` <a name="put_targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner_information` <a name="reset_owner_information" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation"></a>

```python
def reset_owner_information() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput">owner_information_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput">window_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation">owner_information</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId">window_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets"></a>

```python
targets: SsmMaintenanceWindowTargetTargetsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_information_input`<sup>Optional</sup> <a name="owner_information_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput"></a>

```python
owner_information_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]

---

##### `window_id_input`<sup>Optional</sup> <a name="window_id_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput"></a>

```python
window_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_information`<sup>Required</sup> <a name="owner_information" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation"></a>

```python
owner_information: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTargetConfig <a name="SsmMaintenanceWindowTargetConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_type: str,
  targets: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]],
  window_id: str,
  description: str = None,
  id: str = None,
  name: str = None,
  owner_information: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId">window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation">owner_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}.

---

##### `owner_information`<sup>Optional</sup> <a name="owner_information" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation"></a>

```python
owner_information: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}.

---

### SsmMaintenanceWindowTargetTargets <a name="SsmMaintenanceWindowTargetTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTargetTargetsList <a name="SsmMaintenanceWindowTargetTargetsList" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmMaintenanceWindowTargetTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmMaintenanceWindowTargetTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>]]

---


### SsmMaintenanceWindowTargetTargetsOutputReference <a name="SsmMaintenanceWindowTargetTargetsOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_maintenance_window_target

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SsmMaintenanceWindowTargetTargets, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>, cdktf.IResolvable]

---



