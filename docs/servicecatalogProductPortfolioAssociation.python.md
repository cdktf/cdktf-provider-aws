# `servicecatalogProductPortfolioAssociation` Submodule <a name="`servicecatalogProductPortfolioAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProductPortfolioAssociation <a name="ServicecatalogProductPortfolioAssociation" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation(
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
  product_id: str,
  accept_language: str = None,
  id: str = None,
  source_portfolio_id: str = None,
  timeouts: ServicecatalogProductPortfolioAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.sourcePortfolioId">source_portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.portfolioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_portfolio_id`<sup>Optional</sup> <a name="source_portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.sourcePortfolioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId">reset_source_portfolio_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_portfolio_id` <a name="reset_source_portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId"></a>

```python
def reset_source_portfolio_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput">source_portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId">source_portfolio_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts"></a>

```python
timeouts: ServicecatalogProductPortfolioAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `source_portfolio_id_input`<sup>Optional</sup> <a name="source_portfolio_id_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput"></a>

```python
source_portfolio_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogProductPortfolioAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `source_portfolio_id`<sup>Required</sup> <a name="source_portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId"></a>

```python
source_portfolio_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductPortfolioAssociationConfig <a name="ServicecatalogProductPortfolioAssociationConfig" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  portfolio_id: str,
  product_id: str,
  accept_language: str = None,
  id: str = None,
  source_portfolio_id: str = None,
  timeouts: ServicecatalogProductPortfolioAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId">source_portfolio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_portfolio_id`<sup>Optional</sup> <a name="source_portfolio_id" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId"></a>

```python
source_portfolio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogProductPortfolioAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}

---

### ServicecatalogProductPortfolioAssociationTimeouts <a name="ServicecatalogProductPortfolioAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductPortfolioAssociationTimeoutsOutputReference <a name="ServicecatalogProductPortfolioAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product_portfolio_association

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogProductPortfolioAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>, cdktf.IResolvable]

---



