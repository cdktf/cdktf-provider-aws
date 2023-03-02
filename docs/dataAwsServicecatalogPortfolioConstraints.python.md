# `dataAwsServicecatalogPortfolioConstraints` Submodule <a name="`dataAwsServicecatalogPortfolioConstraints` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogPortfolioConstraints <a name="DataAwsServicecatalogPortfolioConstraints" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  portfolio_id: str,
  accept_language: str = None,
  id: str = None,
  product_id: str = None,
  timeouts: DataAwsServicecatalogPortfolioConstraintsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.portfolioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId">product_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details"></a>

```python
details: DataAwsServicecatalogPortfolioConstraintsDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsServicecatalogPortfolioConstraintsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>, cdktf.IResolvable]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogPortfolioConstraintsConfig <a name="DataAwsServicecatalogPortfolioConstraintsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  portfolio_id: str,
  accept_language: str = None,
  id: str = None,
  product_id: str = None,
  timeouts: DataAwsServicecatalogPortfolioConstraintsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogPortfolioConstraintsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}

---

### DataAwsServicecatalogPortfolioConstraintsDetails <a name="DataAwsServicecatalogPortfolioConstraintsDetails" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails()
```


### DataAwsServicecatalogPortfolioConstraintsTimeouts <a name="DataAwsServicecatalogPortfolioConstraintsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogPortfolioConstraintsDetailsList <a name="DataAwsServicecatalogPortfolioConstraintsDetailsList" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId">constraint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_id`<sup>Required</sup> <a name="constraint_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId"></a>

```python
constraint_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServicecatalogPortfolioConstraintsDetails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a>

---


### DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_portfolio_constraints

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsServicecatalogPortfolioConstraintsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>, cdktf.IResolvable]

---



