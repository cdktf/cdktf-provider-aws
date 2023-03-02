# `servicecatalogProvisioningArtifact` Submodule <a name="`servicecatalogProvisioningArtifact` Submodule" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisioningArtifact <a name="ServicecatalogProvisioningArtifact" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  product_id: str,
  accept_language: str = None,
  active: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_template_validation: typing.Union[bool, IResolvable] = None,
  guidance: str = None,
  id: str = None,
  name: str = None,
  template_physical_id: str = None,
  template_url: str = None,
  timeouts: ServicecatalogProvisioningArtifactTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.disableTemplateValidation">disable_template_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.guidance">guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templatePhysicalId">template_physical_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `disable_template_validation`<sup>Optional</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.disableTemplateValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `guidance`<sup>Optional</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.guidance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `template_physical_id`<sup>Optional</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templatePhysicalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation">reset_disable_template_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance">reset_guidance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId">reset_template_physical_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl">reset_template_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_template_validation` <a name="reset_disable_template_validation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation"></a>

```python
def reset_disable_template_validation() -> None
```

##### `reset_guidance` <a name="reset_guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance"></a>

```python
def reset_guidance() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_template_physical_id` <a name="reset_template_physical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId"></a>

```python
def reset_template_physical_id() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput">disable_template_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput">guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput">template_physical_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation">disable_template_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance">guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId">template_physical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts"></a>

```python
timeouts: ServicecatalogProvisioningArtifactTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_template_validation_input`<sup>Optional</sup> <a name="disable_template_validation_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput"></a>

```python
disable_template_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guidance_input`<sup>Optional</sup> <a name="guidance_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput"></a>

```python
guidance_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `template_physical_id_input`<sup>Optional</sup> <a name="template_physical_id_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput"></a>

```python
template_physical_id_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogProvisioningArtifactTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_template_validation`<sup>Required</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation"></a>

```python
disable_template_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guidance`<sup>Required</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance"></a>

```python
guidance: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `template_physical_id`<sup>Required</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId"></a>

```python
template_physical_id: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisioningArtifactConfig <a name="ServicecatalogProvisioningArtifactConfig" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  product_id: str,
  accept_language: str = None,
  active: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disable_template_validation: typing.Union[bool, IResolvable] = None,
  guidance: str = None,
  id: str = None,
  name: str = None,
  template_physical_id: str = None,
  template_url: str = None,
  timeouts: ServicecatalogProvisioningArtifactTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation">disable_template_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance">guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId">template_physical_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `disable_template_validation`<sup>Optional</sup> <a name="disable_template_validation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation"></a>

```python
disable_template_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `guidance`<sup>Optional</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance"></a>

```python
guidance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `template_physical_id`<sup>Optional</sup> <a name="template_physical_id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId"></a>

```python
template_physical_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogProvisioningArtifactTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

### ServicecatalogProvisioningArtifactTimeouts <a name="ServicecatalogProvisioningArtifactTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisioningArtifactTimeoutsOutputReference <a name="ServicecatalogProvisioningArtifactTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioning_artifact

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogProvisioningArtifactTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>, cdktf.IResolvable]

---



