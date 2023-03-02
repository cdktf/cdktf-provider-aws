# `glueUserDefinedFunction` Submodule <a name="`glueUserDefinedFunction` Submodule" id="@cdktf/provider-aws.glueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueUserDefinedFunction <a name="GlueUserDefinedFunction" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function aws_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  class_name: str,
  database_name: str,
  name: str,
  owner_name: str,
  owner_type: str,
  catalog_id: str = None,
  id: str = None,
  resource_uris: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.className">class_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerName">owner_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerType">owner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.resourceUris">resource_uris</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]</code> | resource_uris block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.className"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}.

---

##### `owner_name`<sup>Required</sup> <a name="owner_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}.

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_uris`<sup>Optional</sup> <a name="resource_uris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.resourceUris"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]

resource_uris block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris">put_resource_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris">reset_resource_uris</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_resource_uris` <a name="put_resource_uris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris"></a>

```python
def put_resource_uris(
  value: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_uris` <a name="reset_resource_uris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris"></a>

```python
def reset_resource_uris() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris">resource_uris</a></code> | <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput">owner_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput">owner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput">resource_uris_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName">owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `resource_uris`<sup>Required</sup> <a name="resource_uris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris"></a>

```python
resource_uris: GlueUserDefinedFunctionResourceUrisList
```

- *Type:* <a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_name_input`<sup>Optional</sup> <a name="owner_name_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput"></a>

```python
owner_name_input: str
```

- *Type:* str

---

##### `owner_type_input`<sup>Optional</sup> <a name="owner_type_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput"></a>

```python
owner_type_input: str
```

- *Type:* str

---

##### `resource_uris_input`<sup>Optional</sup> <a name="resource_uris_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput"></a>

```python
resource_uris_input: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_name`<sup>Required</sup> <a name="owner_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName"></a>

```python
owner_name: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueUserDefinedFunctionConfig <a name="GlueUserDefinedFunctionConfig" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  class_name: str,
  database_name: str,
  name: str,
  owner_name: str,
  owner_type: str,
  catalog_id: str = None,
  id: str = None,
  resource_uris: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className">class_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName">owner_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType">owner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris">resource_uris</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]</code> | resource_uris block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className"></a>

```python
class_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}.

---

##### `owner_name`<sup>Required</sup> <a name="owner_name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName"></a>

```python
owner_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}.

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_uris`<sup>Optional</sup> <a name="resource_uris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris"></a>

```python
resource_uris: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]

resource_uris block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

### GlueUserDefinedFunctionResourceUris <a name="GlueUserDefinedFunctionResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris(
  resource_type: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}. |

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueUserDefinedFunctionResourceUrisList <a name="GlueUserDefinedFunctionResourceUrisList" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueUserDefinedFunctionResourceUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueUserDefinedFunctionResourceUris]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]]

---


### GlueUserDefinedFunctionResourceUrisOutputReference <a name="GlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueUserDefinedFunctionResourceUris, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>, cdktf.IResolvable]

---



