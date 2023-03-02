# `servicecatalogProduct` Submodule <a name="`servicecatalogProduct` Submodule" id="@cdktf/provider-aws.servicecatalogProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProduct <a name="ServicecatalogProduct" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product aws_servicecatalog_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProduct(
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
  owner: str,
  provisioning_artifact_parameters: ServicecatalogProductProvisioningArtifactParameters,
  type: str,
  accept_language: str = None,
  description: str = None,
  distributor: str = None,
  id: str = None,
  support_description: str = None,
  support_email: str = None,
  support_url: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | provisioning_artifact_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.distributor">distributor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportDescription">support_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportEmail">support_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportUrl">support_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}.

---

##### `provisioning_artifact_parameters`<sup>Required</sup> <a name="provisioning_artifact_parameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.provisioningArtifactParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

provisioning_artifact_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.distributor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `support_description`<sup>Optional</sup> <a name="support_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}.

---

##### `support_email`<sup>Optional</sup> <a name="support_email" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}.

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.supportUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#timeouts ServicecatalogProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters">put_provisioning_artifact_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDistributor">reset_distributor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportDescription">reset_support_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportEmail">reset_support_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportUrl">reset_support_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provisioning_artifact_parameters` <a name="put_provisioning_artifact_parameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters"></a>

```python
def put_provisioning_artifact_parameters(
  description: str = None,
  disable_template_validation: typing.Union[bool, IResolvable] = None,
  name: str = None,
  template_physical_id: str = None,
  template_url: str = None,
  type: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

###### `disable_template_validation`<sup>Optional</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.disableTemplateValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

###### `template_physical_id`<sup>Optional</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.templatePhysicalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}.

---

###### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.templateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distributor` <a name="reset_distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDistributor"></a>

```python
def reset_distributor() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_support_description` <a name="reset_support_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportDescription"></a>

```python
def reset_support_description() -> None
```

##### `reset_support_email` <a name="reset_support_email" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportEmail"></a>

```python
def reset_support_email() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.hasDefaultPath">has_default_path</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference">ServicecatalogProductProvisioningArtifactParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference">ServicecatalogProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributorInput">distributor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParametersInput">provisioning_artifact_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescriptionInput">support_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmailInput">support_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributor">distributor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescription">support_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmail">support_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `has_default_path`<sup>Required</sup> <a name="has_default_path" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.hasDefaultPath"></a>

```python
has_default_path: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `provisioning_artifact_parameters`<sup>Required</sup> <a name="provisioning_artifact_parameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParameters"></a>

```python
provisioning_artifact_parameters: ServicecatalogProductProvisioningArtifactParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference">ServicecatalogProductProvisioningArtifactParametersOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeouts"></a>

```python
timeouts: ServicecatalogProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference">ServicecatalogProductTimeoutsOutputReference</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distributor_input`<sup>Optional</sup> <a name="distributor_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributorInput"></a>

```python
distributor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `provisioning_artifact_parameters_input`<sup>Optional</sup> <a name="provisioning_artifact_parameters_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParametersInput"></a>

```python
provisioning_artifact_parameters_input: ServicecatalogProductProvisioningArtifactParameters
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

---

##### `support_description_input`<sup>Optional</sup> <a name="support_description_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescriptionInput"></a>

```python
support_description_input: str
```

- *Type:* str

---

##### `support_email_input`<sup>Optional</sup> <a name="support_email_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmailInput"></a>

```python
support_email_input: str
```

- *Type:* str

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `support_description`<sup>Required</sup> <a name="support_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

---

##### `support_email`<sup>Required</sup> <a name="support_email" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductConfig <a name="ServicecatalogProductConfig" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  owner: str,
  provisioning_artifact_parameters: ServicecatalogProductProvisioningArtifactParameters,
  type: str,
  accept_language: str = None,
  description: str = None,
  distributor: str = None,
  id: str = None,
  support_description: str = None,
  support_email: str = None,
  support_url: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | provisioning_artifact_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.distributor">distributor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportDescription">support_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportEmail">support_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportUrl">support_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}.

---

##### `provisioning_artifact_parameters`<sup>Required</sup> <a name="provisioning_artifact_parameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioningArtifactParameters"></a>

```python
provisioning_artifact_parameters: ServicecatalogProductProvisioningArtifactParameters
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

provisioning_artifact_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `support_description`<sup>Optional</sup> <a name="support_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}.

---

##### `support_email`<sup>Optional</sup> <a name="support_email" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}.

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#timeouts ServicecatalogProduct#timeouts}

---

### ServicecatalogProductProvisioningArtifactParameters <a name="ServicecatalogProductProvisioningArtifactParameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters(
  description: str = None,
  disable_template_validation: typing.Union[bool, IResolvable] = None,
  name: str = None,
  template_physical_id: str = None,
  template_url: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.disableTemplateValidation">disable_template_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templatePhysicalId">template_physical_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

##### `disable_template_validation`<sup>Optional</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```python
disable_template_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

##### `template_physical_id`<sup>Optional</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templatePhysicalId"></a>

```python
template_physical_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

### ServicecatalogProductTimeouts <a name="ServicecatalogProductTimeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProductTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogProductProvisioningArtifactParametersOutputReference" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">reset_disable_template_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplatePhysicalId">reset_template_physical_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplateUrl">reset_template_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_template_validation` <a name="reset_disable_template_validation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```python
def reset_disable_template_validation() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_template_physical_id` <a name="reset_template_physical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplatePhysicalId"></a>

```python
def reset_template_physical_id() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">disable_template_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalIdInput">template_physical_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disable_template_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalId">template_physical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_template_validation_input`<sup>Optional</sup> <a name="disable_template_validation_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```python
disable_template_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `template_physical_id_input`<sup>Optional</sup> <a name="template_physical_id_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalIdInput"></a>

```python
template_physical_id_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_template_validation`<sup>Required</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```python
disable_template_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_physical_id`<sup>Required</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalId"></a>

```python
template_physical_id: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```python
internal_value: ServicecatalogProductProvisioningArtifactParameters
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

---


### ServicecatalogProductTimeoutsOutputReference <a name="ServicecatalogProductTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_product

servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>, cdktf.IResolvable]

---



