# `ec2DefaultCreditSpecification` Submodule <a name="`ec2DefaultCreditSpecification` Submodule" id="@cdktf/provider-aws.ec2DefaultCreditSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2DefaultCreditSpecification <a name="Ec2DefaultCreditSpecification" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification aws_ec2_default_credit_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cpu_credits: str,
  instance_family: str,
  region: str = None,
  timeouts: Ec2DefaultCreditSpecificationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.instanceFamily">instance_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}.

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.instanceFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#region Ec2DefaultCreditSpecification#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#timeouts Ec2DefaultCreditSpecification#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#create Ec2DefaultCreditSpecification#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#update Ec2DefaultCreditSpecification#update}

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2DefaultCreditSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2DefaultCreditSpecification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2DefaultCreditSpecification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2DefaultCreditSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2DefaultCreditSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference">Ec2DefaultCreditSpecificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamilyInput">instance_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamily">instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeouts"></a>

```python
timeouts: Ec2DefaultCreditSpecificationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference">Ec2DefaultCreditSpecificationTimeoutsOutputReference</a>

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `instance_family_input`<sup>Optional</sup> <a name="instance_family_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamilyInput"></a>

```python
instance_family_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Ec2DefaultCreditSpecificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>]

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2DefaultCreditSpecificationConfig <a name="Ec2DefaultCreditSpecificationConfig" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cpu_credits: str,
  instance_family: str,
  region: str = None,
  timeouts: Ec2DefaultCreditSpecificationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.instanceFamily">instance_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}.

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#region Ec2DefaultCreditSpecification#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.timeouts"></a>

```python
timeouts: Ec2DefaultCreditSpecificationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#timeouts Ec2DefaultCreditSpecification#timeouts}

---

### Ec2DefaultCreditSpecificationTimeouts <a name="Ec2DefaultCreditSpecificationTimeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#create Ec2DefaultCreditSpecification#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ec2_default_credit_specification#update Ec2DefaultCreditSpecification#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2DefaultCreditSpecificationTimeoutsOutputReference <a name="Ec2DefaultCreditSpecificationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_default_credit_specification

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Ec2DefaultCreditSpecificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>]

---



