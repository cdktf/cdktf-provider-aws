# `pinpointEmailTemplate` Submodule <a name="`pinpointEmailTemplate` Submodule" id="@cdktf/provider-aws.pinpointEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailTemplate <a name="PinpointEmailTemplate" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  template_name: str,
  email_template: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.emailTemplate">email_template</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]</code> | email_template block. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}.

---

##### `email_template`<sup>Optional</sup> <a name="email_template" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.emailTemplate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate">put_email_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate">reset_email_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email_template` <a name="put_email_template" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate"></a>

```python
def put_email_template(
  value: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]

---

##### `reset_email_template` <a name="reset_email_template" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate"></a>

```python
def reset_email_template() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PinpointEmailTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PinpointEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PinpointEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate">email_template</a></code> | <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput">email_template_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email_template`<sup>Required</sup> <a name="email_template" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate"></a>

```python
email_template: PinpointEmailTemplateEmailTemplateList
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `email_template_input`<sup>Optional</sup> <a name="email_template_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput"></a>

```python
email_template_input: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailTemplateConfig <a name="PinpointEmailTemplateConfig" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  template_name: str,
  email_template: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate">email_template</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]</code> | email_template block. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}.

---

##### `email_template`<sup>Optional</sup> <a name="email_template" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate"></a>

```python
email_template: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}.

---

### PinpointEmailTemplateEmailTemplate <a name="PinpointEmailTemplateEmailTemplate" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate(
  default_substitutions: str = None,
  description: str = None,
  header: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplateHeader]] = None,
  html_part: str = None,
  recommender_id: str = None,
  subject: str = None,
  text_part: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions">default_substitutions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart">html_part</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId">recommender_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart">text_part</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}. |

---

##### `default_substitutions`<sup>Optional</sup> <a name="default_substitutions" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions"></a>

```python
default_substitutions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplateHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#header PinpointEmailTemplate#header}

---

##### `html_part`<sup>Optional</sup> <a name="html_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart"></a>

```python
html_part: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}.

---

##### `recommender_id`<sup>Optional</sup> <a name="recommender_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId"></a>

```python
recommender_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}.

---

##### `text_part`<sup>Optional</sup> <a name="text_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart"></a>

```python
text_part: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}.

---

### PinpointEmailTemplateEmailTemplateHeader <a name="PinpointEmailTemplateEmailTemplateHeader" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointEmailTemplateEmailTemplateHeaderList <a name="PinpointEmailTemplateEmailTemplateHeaderList" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PinpointEmailTemplateEmailTemplateHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplateHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]

---


### PinpointEmailTemplateEmailTemplateHeaderOutputReference <a name="PinpointEmailTemplateEmailTemplateHeaderOutputReference" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PinpointEmailTemplateEmailTemplateHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]

---


### PinpointEmailTemplateEmailTemplateList <a name="PinpointEmailTemplateEmailTemplateList" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PinpointEmailTemplateEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]]

---


### PinpointEmailTemplateEmailTemplateOutputReference <a name="PinpointEmailTemplateEmailTemplateOutputReference" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_template

pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions">reset_default_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart">reset_html_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId">reset_recommender_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart">reset_text_part</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplateHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]

---

##### `reset_default_substitutions` <a name="reset_default_substitutions" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions"></a>

```python
def reset_default_substitutions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_html_part` <a name="reset_html_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart"></a>

```python
def reset_html_part() -> None
```

##### `reset_recommender_id` <a name="reset_recommender_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId"></a>

```python
def reset_recommender_id() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_text_part` <a name="reset_text_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart"></a>

```python
def reset_text_part() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput">default_substitutions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput">html_part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput">recommender_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput">text_part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions">default_substitutions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart">html_part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId">recommender_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart">text_part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header"></a>

```python
header: PinpointEmailTemplateEmailTemplateHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a>

---

##### `default_substitutions_input`<sup>Optional</sup> <a name="default_substitutions_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput"></a>

```python
default_substitutions_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[PinpointEmailTemplateEmailTemplateHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>]]

---

##### `html_part_input`<sup>Optional</sup> <a name="html_part_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput"></a>

```python
html_part_input: str
```

- *Type:* str

---

##### `recommender_id_input`<sup>Optional</sup> <a name="recommender_id_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput"></a>

```python
recommender_id_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `text_part_input`<sup>Optional</sup> <a name="text_part_input" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput"></a>

```python
text_part_input: str
```

- *Type:* str

---

##### `default_substitutions`<sup>Required</sup> <a name="default_substitutions" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions"></a>

```python
default_substitutions: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `html_part`<sup>Required</sup> <a name="html_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart"></a>

```python
html_part: str
```

- *Type:* str

---

##### `recommender_id`<sup>Required</sup> <a name="recommender_id" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId"></a>

```python
recommender_id: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `text_part`<sup>Required</sup> <a name="text_part" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart"></a>

```python
text_part: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PinpointEmailTemplateEmailTemplate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>]

---



