# `acmpcaCertificateAuthority` Submodule <a name="`acmpcaCertificateAuthority` Submodule" id="@cdktf/provider-aws.acmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthority <a name="AcmpcaCertificateAuthority" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority aws_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_configuration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  permanent_deletion_time_in_days: typing.Union[int, float] = None,
  revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AcmpcaCertificateAuthorityTimeouts = None,
  type: str = None,
  usage_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.certificateAuthorityConfiguration">certificate_authority_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | certificate_authority_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.permanentDeletionTimeInDays">permanent_deletion_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | revocation_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode">usage_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_configuration`<sup>Required</sup> <a name="certificate_authority_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.certificateAuthorityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

certificate_authority_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permanent_deletion_time_in_days`<sup>Optional</sup> <a name="permanent_deletion_time_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.permanentDeletionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}.

---

##### `revocation_configuration`<sup>Optional</sup> <a name="revocation_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

revocation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#timeouts AcmpcaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}.

---

##### `usage_mode`<sup>Optional</sup> <a name="usage_mode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration">put_certificate_authority_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration">put_revocation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetPermanentDeletionTimeInDays">reset_permanent_deletion_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration">reset_revocation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode">reset_usage_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_certificate_authority_configuration` <a name="put_certificate_authority_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration"></a>

```python
def put_certificate_authority_configuration(
  key_algorithm: str,
  signing_algorithm: str,
  subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject
) -> None
```

###### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration.parameter.keyAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}.

---

###### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration.parameter.signingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `put_revocation_configuration` <a name="put_revocation_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration"></a>

```python
def put_revocation_configuration(
  crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = None,
  ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = None
) -> None
```

###### `crl_configuration`<sup>Optional</sup> <a name="crl_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.crlConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

crl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

###### `ocsp_configuration`<sup>Optional</sup> <a name="ocsp_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.ocspConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

ocsp_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permanent_deletion_time_in_days` <a name="reset_permanent_deletion_time_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetPermanentDeletionTimeInDays"></a>

```python
def reset_permanent_deletion_time_in_days() -> None
```

##### `reset_revocation_configuration` <a name="reset_revocation_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration"></a>

```python
def reset_revocation_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_usage_mode` <a name="reset_usage_mode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode"></a>

```python
def reset_usage_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfiguration">certificate_authority_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.serial">serial</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference">AcmpcaCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfigurationInput">certificate_authority_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDaysInput">permanent_deletion_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput">revocation_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput">usage_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDays">permanent_deletion_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode">usage_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_authority_configuration`<sup>Required</sup> <a name="certificate_authority_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfiguration"></a>

```python
certificate_authority_configuration: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference</a>

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `revocation_configuration`<sup>Required</sup> <a name="revocation_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```python
revocation_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.serial"></a>

```python
serial: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeouts"></a>

```python
timeouts: AcmpcaCertificateAuthorityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference">AcmpcaCertificateAuthorityTimeoutsOutputReference</a>

---

##### `certificate_authority_configuration_input`<sup>Optional</sup> <a name="certificate_authority_configuration_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfigurationInput"></a>

```python
certificate_authority_configuration_input: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permanent_deletion_time_in_days_input`<sup>Optional</sup> <a name="permanent_deletion_time_in_days_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDaysInput"></a>

```python
permanent_deletion_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revocation_configuration_input`<sup>Optional</sup> <a name="revocation_configuration_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput"></a>

```python
revocation_configuration_input: AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AcmpcaCertificateAuthorityTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usage_mode_input`<sup>Optional</sup> <a name="usage_mode_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput"></a>

```python
usage_mode_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permanent_deletion_time_in_days`<sup>Required</sup> <a name="permanent_deletion_time_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDays"></a>

```python
permanent_deletion_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usage_mode`<sup>Required</sup> <a name="usage_mode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode"></a>

```python
usage_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityCertificateAuthorityConfiguration <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration(
  key_algorithm: str,
  signing_algorithm: str,
  subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | subject block. |

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.subject"></a>

```python
subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject(
  common_name: str = None,
  country: str = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.initials">initials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.locality">locality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.pseudonym">pseudonym</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.initials"></a>

```python
initials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthorityConfig <a name="AcmpcaCertificateAuthorityConfig" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_configuration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  permanent_deletion_time_in_days: typing.Union[int, float] = None,
  revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AcmpcaCertificateAuthorityTimeouts = None,
  type: str = None,
  usage_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.certificateAuthorityConfiguration">certificate_authority_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | certificate_authority_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.permanentDeletionTimeInDays">permanent_deletion_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | revocation_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode">usage_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_configuration`<sup>Required</sup> <a name="certificate_authority_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.certificateAuthorityConfiguration"></a>

```python
certificate_authority_configuration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

certificate_authority_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permanent_deletion_time_in_days`<sup>Optional</sup> <a name="permanent_deletion_time_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.permanentDeletionTimeInDays"></a>

```python
permanent_deletion_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}.

---

##### `revocation_configuration`<sup>Optional</sup> <a name="revocation_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration"></a>

```python
revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

revocation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.timeouts"></a>

```python
timeouts: AcmpcaCertificateAuthorityTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#timeouts AcmpcaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}.

---

##### `usage_mode`<sup>Optional</sup> <a name="usage_mode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode"></a>

```python
usage_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}.

---

### AcmpcaCertificateAuthorityRevocationConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration(
  crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = None,
  ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration">crl_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | crl_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration">ocsp_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | ocsp_configuration block. |

---

##### `crl_configuration`<sup>Optional</sup> <a name="crl_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

```python
crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

crl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

##### `ocsp_configuration`<sup>Optional</sup> <a name="ocsp_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration"></a>

```python
ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

ocsp_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration(
  custom_cname: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  expiration_in_days: typing.Union[int, float] = None,
  s3_bucket_name: str = None,
  s3_object_acl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname">custom_cname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl">s3_object_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}. |

---

##### `custom_cname`<sup>Optional</sup> <a name="custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

```python
custom_cname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

##### `s3_object_acl`<sup>Optional</sup> <a name="s3_object_acl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl"></a>

```python
s3_object_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration(
  enabled: typing.Union[bool, IResolvable],
  ocsp_custom_cname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname">ocsp_custom_cname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `ocsp_custom_cname`<sup>Optional</sup> <a name="ocsp_custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname"></a>

```python
ocsp_custom_cname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

### AcmpcaCertificateAuthorityTimeouts <a name="AcmpcaCertificateAuthorityTimeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject">put_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject` <a name="put_subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject"></a>

```python
def put_subject(
  common_name: str = None,
  country: str = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
) -> None
```

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.generationQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

###### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.initials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.locality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.pseudonym"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

###### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subjectInput">subject_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subject"></a>

```python
subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference</a>

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subjectInput"></a>

```python
subject_input: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

---


### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname">reset_custom_cname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays">reset_expiration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl">reset_s3_object_acl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_cname` <a name="reset_custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname"></a>

```python
def reset_custom_cname() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_expiration_in_days` <a name="reset_expiration_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays"></a>

```python
def reset_expiration_in_days() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_object_acl` <a name="reset_s3_object_acl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl"></a>

```python
def reset_s3_object_acl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput">custom_cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput">expiration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput">s3_object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">custom_cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3_object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_cname_input`<sup>Optional</sup> <a name="custom_cname_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput"></a>

```python
custom_cname_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_in_days_input`<sup>Optional</sup> <a name="expiration_in_days_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput"></a>

```python
expiration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_object_acl_input`<sup>Optional</sup> <a name="s3_object_acl_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput"></a>

```python
s3_object_acl_input: str
```

- *Type:* str

---

##### `custom_cname`<sup>Required</sup> <a name="custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```python
custom_cname: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_in_days`<sup>Required</sup> <a name="expiration_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_object_acl`<sup>Required</sup> <a name="s3_object_acl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```python
s3_object_acl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname">reset_ocsp_custom_cname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ocsp_custom_cname` <a name="reset_ocsp_custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname"></a>

```python
def reset_ocsp_custom_cname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput">ocsp_custom_cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocsp_custom_cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_custom_cname_input`<sup>Optional</sup> <a name="ocsp_custom_cname_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput"></a>

```python
ocsp_custom_cname_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_custom_cname`<sup>Required</sup> <a name="ocsp_custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```python
ocsp_custom_cname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration">put_crl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration">put_ocsp_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration">reset_crl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration">reset_ocsp_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_crl_configuration` <a name="put_crl_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration"></a>

```python
def put_crl_configuration(
  custom_cname: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  expiration_in_days: typing.Union[int, float] = None,
  s3_bucket_name: str = None,
  s3_object_acl: str = None
) -> None
```

###### `custom_cname`<sup>Optional</sup> <a name="custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.customCname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

###### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.expirationInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

###### `s3_object_acl`<sup>Optional</sup> <a name="s3_object_acl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.s3ObjectAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

##### `put_ocsp_configuration` <a name="put_ocsp_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration"></a>

```python
def put_ocsp_configuration(
  enabled: typing.Union[bool, IResolvable],
  ocsp_custom_cname: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

###### `ocsp_custom_cname`<sup>Optional</sup> <a name="ocsp_custom_cname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.ocspCustomCname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

##### `reset_crl_configuration` <a name="reset_crl_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration"></a>

```python
def reset_crl_configuration() -> None
```

##### `reset_ocsp_configuration` <a name="reset_ocsp_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration"></a>

```python
def reset_ocsp_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crl_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocsp_configuration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput">crl_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput">ocsp_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_configuration`<sup>Required</sup> <a name="crl_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```python
crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `ocsp_configuration`<sup>Required</sup> <a name="ocsp_configuration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```python
ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `crl_configuration_input`<sup>Optional</sup> <a name="crl_configuration_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput"></a>

```python
crl_configuration_input: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `ocsp_configuration_input`<sup>Optional</sup> <a name="ocsp_configuration_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput"></a>

```python
ocsp_configuration_input: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---


### AcmpcaCertificateAuthorityTimeoutsOutputReference <a name="AcmpcaCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AcmpcaCertificateAuthorityTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>, cdktf.IResolvable]

---



