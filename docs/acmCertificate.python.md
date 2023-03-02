# `acmCertificate` Submodule <a name="`acmCertificate` Submodule" id="@cdktf/provider-aws.acmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificate <a name="AcmCertificate" id="@cdktf/provider-aws.acmCertificate.AcmCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_arn: str = None,
  certificate_body: str = None,
  certificate_chain: str = None,
  domain_name: str = None,
  early_renewal_duration: str = None,
  id: str = None,
  key_algorithm: str = None,
  options: AcmCertificateOptions = None,
  private_key: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  validation_method: str = None,
  validation_option: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateBody">certificate_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.earlyRenewalDuration">early_renewal_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationMethod">validation_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationOption">validation_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]</code> | validation_option block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificate_body`<sup>Optional</sup> <a name="certificate_body" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `early_renewal_duration`<sup>Optional</sup> <a name="early_renewal_duration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.earlyRenewalDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validation_method`<sup>Optional</sup> <a name="validation_method" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `validation_option`<sup>Optional</sup> <a name="validation_option" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationOption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption">put_validation_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn">reset_certificate_authority_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody">reset_certificate_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain">reset_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration">reset_early_renewal_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod">reset_validation_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption">reset_validation_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_options` <a name="put_options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions"></a>

```python
def put_options(
  certificate_transparency_logging_preference: str = None
) -> None
```

###### `certificate_transparency_logging_preference`<sup>Optional</sup> <a name="certificate_transparency_logging_preference" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions.parameter.certificateTransparencyLoggingPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

##### `put_validation_option` <a name="put_validation_option" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption"></a>

```python
def put_validation_option(
  value: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]

---

##### `reset_certificate_authority_arn` <a name="reset_certificate_authority_arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn"></a>

```python
def reset_certificate_authority_arn() -> None
```

##### `reset_certificate_body` <a name="reset_certificate_body" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody"></a>

```python
def reset_certificate_body() -> None
```

##### `reset_certificate_chain` <a name="reset_certificate_chain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain"></a>

```python
def reset_certificate_chain() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_early_renewal_duration` <a name="reset_early_renewal_duration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration"></a>

```python
def reset_early_renewal_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_validation_method` <a name="reset_validation_method" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod"></a>

```python
def reset_validation_method() -> None
```

##### `reset_validation_option` <a name="reset_validation_option" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption"></a>

```python
def reset_validation_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions">domain_validation_options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal">pending_renewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility">renewal_eligibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary">renewal_summary</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails">validation_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption">validation_option</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput">certificate_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput">early_renewal_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput">validation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput">validation_option_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody">certificate_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration">early_renewal_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod">validation_method</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_validation_options`<sup>Required</sup> <a name="domain_validation_options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions"></a>

```python
domain_validation_options: AcmCertificateDomainValidationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a>

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options"></a>

```python
options: AcmCertificateOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a>

---

##### `pending_renewal`<sup>Required</sup> <a name="pending_renewal" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal"></a>

```python
pending_renewal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `renewal_eligibility`<sup>Required</sup> <a name="renewal_eligibility" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility"></a>

```python
renewal_eligibility: str
```

- *Type:* str

---

##### `renewal_summary`<sup>Required</sup> <a name="renewal_summary" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary"></a>

```python
renewal_summary: AcmCertificateRenewalSummaryList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_emails`<sup>Required</sup> <a name="validation_emails" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails"></a>

```python
validation_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validation_option`<sup>Required</sup> <a name="validation_option" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption"></a>

```python
validation_option: AcmCertificateValidationOptionList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a>

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `certificate_body_input`<sup>Optional</sup> <a name="certificate_body_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput"></a>

```python
certificate_body_input: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `early_renewal_duration_input`<sup>Optional</sup> <a name="early_renewal_duration_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput"></a>

```python
early_renewal_duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput"></a>

```python
options_input: AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `validation_method_input`<sup>Optional</sup> <a name="validation_method_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput"></a>

```python
validation_method_input: str
```

- *Type:* str

---

##### `validation_option_input`<sup>Optional</sup> <a name="validation_option_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput"></a>

```python
validation_option_input: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_body`<sup>Required</sup> <a name="certificate_body" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody"></a>

```python
certificate_body: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `early_renewal_duration`<sup>Required</sup> <a name="early_renewal_duration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration"></a>

```python
early_renewal_duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `validation_method`<sup>Required</sup> <a name="validation_method" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod"></a>

```python
validation_method: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateConfig <a name="AcmCertificateConfig" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_arn: str = None,
  certificate_body: str = None,
  certificate_chain: str = None,
  domain_name: str = None,
  early_renewal_duration: str = None,
  id: str = None,
  key_algorithm: str = None,
  options: AcmCertificateOptions = None,
  private_key: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  validation_method: str = None,
  validation_option: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody">certificate_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration">early_renewal_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod">validation_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption">validation_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]</code> | validation_option block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificate_body`<sup>Optional</sup> <a name="certificate_body" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody"></a>

```python
certificate_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `early_renewal_duration`<sup>Optional</sup> <a name="early_renewal_duration" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration"></a>

```python
early_renewal_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options"></a>

```python
options: AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validation_method`<sup>Optional</sup> <a name="validation_method" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod"></a>

```python
validation_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `validation_option`<sup>Optional</sup> <a name="validation_option" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption"></a>

```python
validation_option: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

---

### AcmCertificateDomainValidationOptions <a name="AcmCertificateDomainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateDomainValidationOptions()
```


### AcmCertificateOptions <a name="AcmCertificateOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateOptions(
  certificate_transparency_logging_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}. |

---

##### `certificate_transparency_logging_preference`<sup>Optional</sup> <a name="certificate_transparency_logging_preference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

### AcmCertificateRenewalSummary <a name="AcmCertificateRenewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateRenewalSummary()
```


### AcmCertificateValidationOption <a name="AcmCertificateValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateValidationOption(
  domain_name: str,
  validation_domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain">validation_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `validation_domain`<sup>Required</sup> <a name="validation_domain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain"></a>

```python
validation_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateDomainValidationOptionsList <a name="AcmCertificateDomainValidationOptionsList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateDomainValidationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AcmCertificateDomainValidationOptionsOutputReference <a name="AcmCertificateDomainValidationOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateDomainValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">resource_record_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">resource_record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">resource_record_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `resource_record_name`<sup>Required</sup> <a name="resource_record_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```python
resource_record_name: str
```

- *Type:* str

---

##### `resource_record_type`<sup>Required</sup> <a name="resource_record_type" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```python
resource_record_type: str
```

- *Type:* str

---

##### `resource_record_value`<sup>Required</sup> <a name="resource_record_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```python
resource_record_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: AcmCertificateDomainValidationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a>

---


### AcmCertificateOptionsOutputReference <a name="AcmCertificateOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference">reset_certificate_transparency_logging_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_transparency_logging_preference` <a name="reset_certificate_transparency_logging_preference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```python
def reset_certificate_transparency_logging_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificate_transparency_logging_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference_input`<sup>Optional</sup> <a name="certificate_transparency_logging_preference_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```python
certificate_transparency_logging_preference_input: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference`<sup>Required</sup> <a name="certificate_transparency_logging_preference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue"></a>

```python
internal_value: AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---


### AcmCertificateRenewalSummaryList <a name="AcmCertificateRenewalSummaryList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateRenewalSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmCertificateRenewalSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AcmCertificateRenewalSummaryOutputReference <a name="AcmCertificateRenewalSummaryOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateRenewalSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus">renewal_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason">renewal_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renewal_status`<sup>Required</sup> <a name="renewal_status" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus"></a>

```python
renewal_status: str
```

- *Type:* str

---

##### `renewal_status_reason`<sup>Required</sup> <a name="renewal_status_reason" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason"></a>

```python
renewal_status_reason: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue"></a>

```python
internal_value: AcmCertificateRenewalSummary
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a>

---


### AcmCertificateValidationOptionList <a name="AcmCertificateValidationOptionList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateValidationOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmCertificateValidationOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AcmCertificateValidationOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>]]

---


### AcmCertificateValidationOptionOutputReference <a name="AcmCertificateValidationOptionOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acm_certificate

acmCertificate.AcmCertificateValidationOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput">validation_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain">validation_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `validation_domain_input`<sup>Optional</sup> <a name="validation_domain_input" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput"></a>

```python
validation_domain_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `validation_domain`<sup>Required</sup> <a name="validation_domain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain"></a>

```python
validation_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AcmCertificateValidationOption, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>, cdktf.IResolvable]

---



