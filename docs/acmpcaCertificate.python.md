# `acmpcaCertificate` Submodule <a name="`acmpcaCertificate` Submodule" id="@cdktf/provider-aws.acmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificate <a name="AcmpcaCertificate" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate aws_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_arn: str,
  certificate_signing_request: str,
  signing_algorithm: str,
  validity: AcmpcaCertificateValidity,
  api_passthrough: str = None,
  id: str = None,
  template_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validity">validity</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | validity block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.apiPassthrough">api_passthrough</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.templateArn">template_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}.

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateSigningRequest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.signingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}.

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validity"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `api_passthrough`<sup>Optional</sup> <a name="api_passthrough" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.apiPassthrough"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_arn`<sup>Optional</sup> <a name="template_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.templateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity">put_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough">reset_api_passthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn">reset_template_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_validity` <a name="put_validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity"></a>

```python
def put_validity(
  type: str,
  value: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}.

---

##### `reset_api_passthrough` <a name="reset_api_passthrough" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough"></a>

```python
def reset_api_passthrough() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_template_arn` <a name="reset_template_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn"></a>

```python
def reset_template_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AcmpcaCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AcmpcaCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AcmpcaCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AcmpcaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput">api_passthrough_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput">certificate_signing_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput">template_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validityInput">validity_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough">api_passthrough</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validity"></a>

```python
validity: AcmpcaCertificateValidityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a>

---

##### `api_passthrough_input`<sup>Optional</sup> <a name="api_passthrough_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput"></a>

```python
api_passthrough_input: str
```

- *Type:* str

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `certificate_signing_request_input`<sup>Optional</sup> <a name="certificate_signing_request_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput"></a>

```python
certificate_signing_request_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `template_arn_input`<sup>Optional</sup> <a name="template_arn_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput"></a>

```python
template_arn_input: str
```

- *Type:* str

---

##### `validity_input`<sup>Optional</sup> <a name="validity_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validityInput"></a>

```python
validity_input: AcmpcaCertificateValidity
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `api_passthrough`<sup>Required</sup> <a name="api_passthrough" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough"></a>

```python
api_passthrough: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateConfig <a name="AcmpcaCertificateConfig" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_arn: str,
  certificate_signing_request: str,
  signing_algorithm: str,
  validity: AcmpcaCertificateValidity,
  api_passthrough: str = None,
  id: str = None,
  template_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.validity">validity</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | validity block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough">api_passthrough</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn">template_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}.

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}.

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.validity"></a>

```python
validity: AcmpcaCertificateValidity
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `api_passthrough`<sup>Optional</sup> <a name="api_passthrough" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough"></a>

```python
api_passthrough: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template_arn`<sup>Optional</sup> <a name="template_arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}.

---

### AcmpcaCertificateValidity <a name="AcmpcaCertificateValidity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidity(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateValidityOutputReference <a name="AcmpcaCertificateValidityOutputReference" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateValidity
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---



