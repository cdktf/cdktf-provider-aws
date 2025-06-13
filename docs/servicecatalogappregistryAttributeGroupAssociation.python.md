# `servicecatalogappregistryAttributeGroupAssociation` Submodule <a name="`servicecatalogappregistryAttributeGroupAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogappregistryAttributeGroupAssociation <a name="ServicecatalogappregistryAttributeGroupAssociation" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association aws_servicecatalogappregistry_attribute_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  attribute_group_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | ID of the application. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.attributeGroupId">attribute_group_id</a></code> | <code>str</code> | ID of the attribute group to associate with the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.applicationId"></a>

- *Type:* str

ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#application_id ServicecatalogappregistryAttributeGroupAssociation#application_id}

---

##### `attribute_group_id`<sup>Required</sup> <a name="attribute_group_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.Initializer.parameter.attributeGroupId"></a>

- *Type:* str

ID of the attribute group to associate with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#attribute_group_id ServicecatalogappregistryAttributeGroupAssociation#attribute_group_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogappregistryAttributeGroupAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogappregistryAttributeGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogappregistryAttributeGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.attributeGroupIdInput">attribute_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.attributeGroupId">attribute_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `attribute_group_id_input`<sup>Optional</sup> <a name="attribute_group_id_input" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.attributeGroupIdInput"></a>

```python
attribute_group_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `attribute_group_id`<sup>Required</sup> <a name="attribute_group_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.attributeGroupId"></a>

```python
attribute_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogappregistryAttributeGroupAssociationConfig <a name="ServicecatalogappregistryAttributeGroupAssociationConfig" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalogappregistry_attribute_group_association

servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  attribute_group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.applicationId">application_id</a></code> | <code>str</code> | ID of the application. |
| <code><a href="#@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.attributeGroupId">attribute_group_id</a></code> | <code>str</code> | ID of the attribute group to associate with the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#application_id ServicecatalogappregistryAttributeGroupAssociation#application_id}

---

##### `attribute_group_id`<sup>Required</sup> <a name="attribute_group_id" id="@cdktf/provider-aws.servicecatalogappregistryAttributeGroupAssociation.ServicecatalogappregistryAttributeGroupAssociationConfig.property.attributeGroupId"></a>

```python
attribute_group_id: str
```

- *Type:* str

ID of the attribute group to associate with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#attribute_group_id ServicecatalogappregistryAttributeGroupAssociation#attribute_group_id}

---



