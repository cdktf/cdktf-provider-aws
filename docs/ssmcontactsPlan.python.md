# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktf/provider-aws.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  stage: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]],
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId">contact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#region SsmcontactsPlan#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage">put_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_stage` <a name="put_stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage"></a>

```python
def put_stage(
  value: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsmcontactsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsmcontactsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput">stage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage"></a>

```python
stage: SsmcontactsPlanStageList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a>

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput"></a>

```python
stage_input: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  stage: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]],
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">contact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage"></a>

```python
stage: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#region SsmcontactsPlan#region}

---

### SsmcontactsPlanStage <a name="SsmcontactsPlanStage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStage(
  duration_in_minutes: typing.Union[int, float],
  target: typing.Union[IResolvable, typing.List[SsmcontactsPlanStageTarget]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target">target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]</code> | target block. |

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target"></a>

```python
target: typing.Union[IResolvable, typing.List[SsmcontactsPlanStageTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#target SsmcontactsPlan#target}

---

### SsmcontactsPlanStageTarget <a name="SsmcontactsPlanStageTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTarget(
  channel_target_info: SsmcontactsPlanStageTargetChannelTargetInfo = None,
  contact_target_info: SsmcontactsPlanStageTargetContactTargetInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | channel_target_info block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | contact_target_info block. |

---

##### `channel_target_info`<sup>Optional</sup> <a name="channel_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsPlanStageTargetChannelTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

channel_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `contact_target_info`<sup>Optional</sup> <a name="contact_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsPlanStageTargetContactTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

contact_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStageTargetChannelTargetInfo <a name="SsmcontactsPlanStageTargetChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo(
  contact_channel_id: str,
  retry_interval_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId">contact_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}. |

---

##### `contact_channel_id`<sup>Required</sup> <a name="contact_channel_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId"></a>

```python
contact_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}.

---

##### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}.

---

### SsmcontactsPlanStageTargetContactTargetInfo <a name="SsmcontactsPlanStageTargetContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo(
  is_essential: typing.Union[bool, IResolvable],
  contact_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential">is_essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId">contact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential"></a>

```python
is_essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}.

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStageList <a name="SsmcontactsPlanStageList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsPlanStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsPlanStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]]

---


### SsmcontactsPlanStageOutputReference <a name="SsmcontactsPlanStageOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget"></a>

```python
def put_target(
  value: typing.Union[IResolvable, typing.List[SsmcontactsPlanStageTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]

---

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target"></a>

```python
target: SsmcontactsPlanStageTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a>

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, typing.List[SsmcontactsPlanStageTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsPlanStage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>]

---


### SsmcontactsPlanStageTargetChannelTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetChannelTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">reset_retry_interval_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retry_interval_in_minutes` <a name="reset_retry_interval_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```python
def reset_retry_interval_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput">contact_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retry_interval_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId">contact_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_channel_id_input`<sup>Optional</sup> <a name="contact_channel_id_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput"></a>

```python
contact_channel_id_input: str
```

- *Type:* str

---

##### `retry_interval_in_minutes_input`<sup>Optional</sup> <a name="retry_interval_in_minutes_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```python
retry_interval_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contact_channel_id`<sup>Required</sup> <a name="contact_channel_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId"></a>

```python
contact_channel_id: str
```

- *Type:* str

---

##### `retry_interval_in_minutes`<sup>Required</sup> <a name="retry_interval_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: SsmcontactsPlanStageTargetChannelTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---


### SsmcontactsPlanStageTargetContactTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetContactTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId">reset_contact_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_id` <a name="reset_contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId"></a>

```python
def reset_contact_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput">is_essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential">is_essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `is_essential_input`<sup>Optional</sup> <a name="is_essential_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput"></a>

```python
is_essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential"></a>

```python
is_essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: SsmcontactsPlanStageTargetContactTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---


### SsmcontactsPlanStageTargetList <a name="SsmcontactsPlanStageTargetList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsPlanStageTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsPlanStageTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]]

---


### SsmcontactsPlanStageTargetOutputReference <a name="SsmcontactsPlanStageTargetOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo">put_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo">put_contact_target_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo">reset_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo">reset_contact_target_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_channel_target_info` <a name="put_channel_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo"></a>

```python
def put_channel_target_info(
  contact_channel_id: str,
  retry_interval_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `contact_channel_id`<sup>Required</sup> <a name="contact_channel_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo.parameter.contactChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}.

---

###### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo.parameter.retryIntervalInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}.

---

##### `put_contact_target_info` <a name="put_contact_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo"></a>

```python
def put_contact_target_info(
  is_essential: typing.Union[bool, IResolvable],
  contact_id: str = None
) -> None
```

###### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo.parameter.isEssential"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}.

---

###### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo.parameter.contactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `reset_channel_target_info` <a name="reset_channel_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo"></a>

```python
def reset_channel_target_info() -> None
```

##### `reset_contact_target_info` <a name="reset_contact_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo"></a>

```python
def reset_contact_target_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput">channel_target_info_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput">contact_target_info_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_target_info`<sup>Required</sup> <a name="channel_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsPlanStageTargetChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a>

---

##### `contact_target_info`<sup>Required</sup> <a name="contact_target_info" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsPlanStageTargetContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a>

---

##### `channel_target_info_input`<sup>Optional</sup> <a name="channel_target_info_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput"></a>

```python
channel_target_info_input: SsmcontactsPlanStageTargetChannelTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---

##### `contact_target_info_input`<sup>Optional</sup> <a name="contact_target_info_input" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput"></a>

```python
contact_target_info_input: SsmcontactsPlanStageTargetContactTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsPlanStageTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>]

---



