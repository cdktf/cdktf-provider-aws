# `servicecatalogappregistryAttributeGroup` Submodule <a name="`servicecatalogappregistryAttributeGroup` Submodule" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogappregistryAttributeGroup <a name="ServicecatalogappregistryAttributeGroup" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group aws_servicecatalogappregistry_attribute_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attributes: str,
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#attributes ServicecatalogappregistryAttributeGroup#attributes}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#name ServicecatalogappregistryAttributeGroup#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#description ServicecatalogappregistryAttributeGroup#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#tags ServicecatalogappregistryAttributeGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#attributes ServicecatalogappregistryAttributeGroup#attributes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#name ServicecatalogappregistryAttributeGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#description ServicecatalogappregistryAttributeGroup#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#tags ServicecatalogappregistryAttributeGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogappregistryAttributeGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogappregistryAttributeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogappregistryAttributeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogappregistryAttributeGroupConfig <a name="ServicecatalogappregistryAttributeGroupConfig" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group

servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attributes: str,
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#attributes ServicecatalogappregistryAttributeGroup#attributes}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#name ServicecatalogappregistryAttributeGroup#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#description ServicecatalogappregistryAttributeGroup#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#tags ServicecatalogappregistryAttributeGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#attributes ServicecatalogappregistryAttributeGroup#attributes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#name ServicecatalogappregistryAttributeGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#description ServicecatalogappregistryAttributeGroup#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroup.ServicecatalogappregistryAttributeGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/servicecatalogappregistry_attribute_group#tags ServicecatalogappregistryAttributeGroup#tags}.

---



