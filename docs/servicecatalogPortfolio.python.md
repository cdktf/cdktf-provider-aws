# `servicecatalogPortfolio` Submodule <a name="`servicecatalogPortfolio` Submodule" id="@cdktf/provider-aws.servicecatalogPortfolio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolio <a name="ServicecatalogPortfolio" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio aws_servicecatalog_portfolio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provider_name: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogPortfolioTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#name ServicecatalogPortfolio#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#description ServicecatalogPortfolio#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#id ServicecatalogPortfolio#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags_all ServicecatalogPortfolio#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#name ServicecatalogPortfolio#name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#description ServicecatalogPortfolio#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#id ServicecatalogPortfolio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags_all ServicecatalogPortfolio#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#timeouts ServicecatalogPortfolio#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#create ServicecatalogPortfolio#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#delete ServicecatalogPortfolio#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#read ServicecatalogPortfolio#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#update ServicecatalogPortfolio#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference">ServicecatalogPortfolioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.timeouts"></a>

```python
timeouts: ServicecatalogPortfolioTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference">ServicecatalogPortfolioTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogPortfolioTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioConfig <a name="ServicecatalogPortfolioConfig" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provider_name: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogPortfolioTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#name ServicecatalogPortfolio#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#description ServicecatalogPortfolio#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#id ServicecatalogPortfolio#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags_all ServicecatalogPortfolio#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#name ServicecatalogPortfolio#name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#description ServicecatalogPortfolio#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#id ServicecatalogPortfolio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#tags_all ServicecatalogPortfolio#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogPortfolioTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#timeouts ServicecatalogPortfolio#timeouts}

---

### ServicecatalogPortfolioTimeouts <a name="ServicecatalogPortfolioTimeouts" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#create ServicecatalogPortfolio#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#delete ServicecatalogPortfolio#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#read ServicecatalogPortfolio#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#update ServicecatalogPortfolio#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#create ServicecatalogPortfolio#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#delete ServicecatalogPortfolio#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#read ServicecatalogPortfolio#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio#update ServicecatalogPortfolio#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPortfolioTimeoutsOutputReference <a name="ServicecatalogPortfolioTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogPortfolioTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogPortfolio.ServicecatalogPortfolioTimeouts">ServicecatalogPortfolioTimeouts</a>, cdktf.IResolvable]

---



