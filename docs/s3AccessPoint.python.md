# `s3AccessPoint` Submodule <a name="`s3AccessPoint` Submodule" id="@cdktf/provider-aws.s3AccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessPoint <a name="S3AccessPoint" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point aws_s3_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPoint(
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
  name: str,
  account_id: str = None,
  bucket_account_id: str = None,
  id: str = None,
  policy: str = None,
  public_access_block_configuration: S3AccessPointPublicAccessBlockConfiguration = None,
  vpc_configuration: S3AccessPointVpcConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.bucketAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}.

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.publicAccessBlockConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration">put_public_access_block_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId">reset_bucket_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration">reset_public_access_block_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_public_access_block_configuration` <a name="put_public_access_block_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration"></a>

```python
def put_public_access_block_configuration(
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
) -> None
```

###### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}.

---

###### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}.

---

###### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.ignorePublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}.

---

###### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.restrictPublicBuckets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  vpc_id: str
) -> None
```

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_bucket_account_id` <a name="reset_bucket_account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId"></a>

```python
def reset_bucket_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_public_access_block_configuration` <a name="reset_public_access_block_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration"></a>

```python
def reset_public_access_block_configuration() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints">endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy">has_public_access_policy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin">network_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput">bucket_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput">public_access_block_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints"></a>

```python
endpoints: StringMap
```

- *Type:* cdktf.StringMap

---

##### `has_public_access_policy`<sup>Required</sup> <a name="has_public_access_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy"></a>

```python
has_public_access_policy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_origin`<sup>Required</sup> <a name="network_origin" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin"></a>

```python
network_origin: str
```

- *Type:* str

---

##### `public_access_block_configuration`<sup>Required</sup> <a name="public_access_block_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3AccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration"></a>

```python
vpc_configuration: S3AccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_account_id_input`<sup>Optional</sup> <a name="bucket_account_id_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput"></a>

```python
bucket_account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `public_access_block_configuration_input`<sup>Optional</sup> <a name="public_access_block_configuration_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput"></a>

```python
public_access_block_configuration_input: S3AccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: S3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessPointConfig <a name="S3AccessPointConfig" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  account_id: str = None,
  bucket_account_id: str = None,
  id: str = None,
  policy: str = None,
  public_access_block_configuration: S3AccessPointPublicAccessBlockConfiguration = None,
  vpc_configuration: S3AccessPointVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}.

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3AccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: S3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

### S3AccessPointPublicAccessBlockConfiguration <a name="S3AccessPointPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration(
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}. |

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}.

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}.

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}.

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.

---

### S3AccessPointVpcConfiguration <a name="S3AccessPointVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPointVpcConfiguration(
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}. |

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessPointPublicAccessBlockConfigurationOutputReference <a name="S3AccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">reset_block_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">reset_block_public_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">reset_ignore_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">reset_restrict_public_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_public_acls` <a name="reset_block_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```python
def reset_block_public_acls() -> None
```

##### `reset_block_public_policy` <a name="reset_block_public_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```python
def reset_block_public_policy() -> None
```

##### `reset_ignore_public_acls` <a name="reset_ignore_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```python
def reset_ignore_public_acls() -> None
```

##### `reset_restrict_public_buckets` <a name="reset_restrict_public_buckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```python
def reset_restrict_public_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">block_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">block_public_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">ignore_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">restrict_public_buckets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls_input`<sup>Optional</sup> <a name="block_public_acls_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```python
block_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy_input`<sup>Optional</sup> <a name="block_public_policy_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```python
block_public_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_public_acls_input`<sup>Optional</sup> <a name="ignore_public_acls_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```python
ignore_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets_input`<sup>Optional</sup> <a name="restrict_public_buckets_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```python
restrict_public_buckets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3AccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---


### S3AccessPointVpcConfigurationOutputReference <a name="S3AccessPointVpcConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_access_point

s3AccessPoint.S3AccessPointVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---



