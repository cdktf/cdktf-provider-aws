# `signerSigningProfile` Submodule <a name="`signerSigningProfile` Submodule" id="@cdktf/provider-aws.signerSigningProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfile <a name="SignerSigningProfile" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile aws_signer_signing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  platform_id: str,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  signature_validity_period: SignerSigningProfileSignatureValidityPeriod = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.platformId">platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.signatureValidityPeriod">signature_validity_period</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | signature_validity_period block. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `platform_id`<sup>Required</sup> <a name="platform_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.platformId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}.

---

##### `signature_validity_period`<sup>Optional</sup> <a name="signature_validity_period" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.signatureValidityPeriod"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

signature_validity_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod">put_signature_validity_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod">reset_signature_validity_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_signature_validity_period` <a name="put_signature_validity_period" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod"></a>

```python
def put_signature_validity_period(
  type: str,
  value: typing.Union[int, float]
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_signature_validity_period` <a name="reset_signature_validity_period" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod"></a>

```python
def reset_signature_validity_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName">platform_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord">revocation_record</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod">signature_validity_period</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn">version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput">platform_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput">signature_validity_period_input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId">platform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `platform_display_name`<sup>Required</sup> <a name="platform_display_name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName"></a>

```python
platform_display_name: str
```

- *Type:* str

---

##### `revocation_record`<sup>Required</sup> <a name="revocation_record" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord"></a>

```python
revocation_record: SignerSigningProfileRevocationRecordList
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a>

---

##### `signature_validity_period`<sup>Required</sup> <a name="signature_validity_period" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod"></a>

```python
signature_validity_period: SignerSigningProfileSignatureValidityPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_arn`<sup>Required</sup> <a name="version_arn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn"></a>

```python
version_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `platform_id_input`<sup>Optional</sup> <a name="platform_id_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput"></a>

```python
platform_id_input: str
```

- *Type:* str

---

##### `signature_validity_period_input`<sup>Optional</sup> <a name="signature_validity_period_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput"></a>

```python
signature_validity_period_input: SignerSigningProfileSignatureValidityPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `platform_id`<sup>Required</sup> <a name="platform_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId"></a>

```python
platform_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfileConfig <a name="SignerSigningProfileConfig" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  platform_id: str,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  signature_validity_period: SignerSigningProfileSignatureValidityPeriod = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId">platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod">signature_validity_period</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | signature_validity_period block. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `platform_id`<sup>Required</sup> <a name="platform_id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId"></a>

```python
platform_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}.

---

##### `signature_validity_period`<sup>Optional</sup> <a name="signature_validity_period" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod"></a>

```python
signature_validity_period: SignerSigningProfileSignatureValidityPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

signature_validity_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}.

---

### SignerSigningProfileRevocationRecord <a name="SignerSigningProfileRevocationRecord" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileRevocationRecord()
```


### SignerSigningProfileSignatureValidityPeriod <a name="SignerSigningProfileSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileSignatureValidityPeriod(
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningProfileRevocationRecordList <a name="SignerSigningProfileRevocationRecordList" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileRevocationRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignerSigningProfileRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SignerSigningProfileRevocationRecordOutputReference <a name="SignerSigningProfileRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom">revocation_effective_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt">revoked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy">revoked_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_effective_from`<sup>Required</sup> <a name="revocation_effective_from" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom"></a>

```python
revocation_effective_from: str
```

- *Type:* str

---

##### `revoked_at`<sup>Required</sup> <a name="revoked_at" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt"></a>

```python
revoked_at: str
```

- *Type:* str

---

##### `revoked_by`<sup>Required</sup> <a name="revoked_by" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy"></a>

```python
revoked_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningProfileRevocationRecord
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a>

---


### SignerSigningProfileSignatureValidityPeriodOutputReference <a name="SignerSigningProfileSignatureValidityPeriodOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile

signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningProfileSignatureValidityPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---



