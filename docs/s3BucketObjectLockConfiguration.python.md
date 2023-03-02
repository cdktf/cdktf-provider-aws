# `s3BucketObjectLockConfiguration` Submodule <a name="`s3BucketObjectLockConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObjectLockConfigurationA <a name="S3BucketObjectLockConfigurationA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  expected_bucket_owner: str = None,
  id: str = None,
  object_lock_enabled: str = None,
  rule: S3BucketObjectLockConfigurationRuleA = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.objectLockEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfigurationA#rule}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetObjectLockEnabled">reset_object_lock_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule"></a>

```python
def put_rule(
  default_retention: S3BucketObjectLockConfigurationRuleDefaultRetentionA
) -> None
```

###### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule.parameter.defaultRetention"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfigurationA#default_retention}

---

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_lock_enabled` <a name="reset_object_lock_enabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetObjectLockEnabled"></a>

```python
def reset_object_lock_enabled() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference">S3BucketObjectLockConfigurationRuleAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabledInput">object_lock_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.ruleInput">rule_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.rule"></a>

```python
rule: S3BucketObjectLockConfigurationRuleAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference">S3BucketObjectLockConfigurationRuleAOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_lock_enabled_input`<sup>Optional</sup> <a name="object_lock_enabled_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabledInput"></a>

```python
object_lock_enabled_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.ruleInput"></a>

```python
rule_input: S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_lock_enabled`<sup>Required</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabled"></a>

```python
object_lock_enabled: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectLockConfigurationAConfig <a name="S3BucketObjectLockConfigurationAConfig" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  expected_bucket_owner: str = None,
  id: str = None,
  object_lock_enabled: str = None,
  rule: S3BucketObjectLockConfigurationRuleA = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.objectLockEnabled"></a>

```python
object_lock_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.rule"></a>

```python
rule: S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfigurationA#rule}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}.

---

### S3BucketObjectLockConfigurationRuleA <a name="S3BucketObjectLockConfigurationRuleA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA(
  default_retention: S3BucketObjectLockConfigurationRuleDefaultRetentionA
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | default_retention block. |

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.property.defaultRetention"></a>

```python
default_retention: S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfigurationA#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetentionA <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA(
  days: typing.Union[int, float] = None,
  mode: str = None,
  years: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.years">years</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}.

---

##### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketObjectLockConfigurationRuleAOutputReference <a name="S3BucketObjectLockConfigurationRuleAOutputReference" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention">put_default_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_retention` <a name="put_default_retention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention"></a>

```python
def put_default_retention(
  days: typing.Union[int, float] = None,
  mode: str = None,
  years: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}.

---

###### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention.parameter.years"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetentionInput">default_retention_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetention"></a>

```python
default_retention: S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference</a>

---

##### `default_retention_input`<sup>Optional</sup> <a name="default_retention_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetentionInput"></a>

```python
default_retention_input: S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

---


### S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_object_lock_configuration

s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetYears">reset_years</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_years` <a name="reset_years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetYears"></a>

```python
def reset_years() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.yearsInput">years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.years">years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `years_input`<sup>Optional</sup> <a name="years_input" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.yearsInput"></a>

```python
years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

---



