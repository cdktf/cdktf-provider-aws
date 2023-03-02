# `s3BucketAcl` Submodule <a name="`s3BucketAcl` Submodule" id="@cdktf/provider-aws.s3BucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketAcl <a name="S3BucketAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl aws_s3_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAcl(
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
  access_control_policy: S3BucketAclAccessControlPolicy = None,
  acl: str = None,
  expected_bucket_owner: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.accessControlPolicy">access_control_policy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `access_control_policy`<sup>Optional</sup> <a name="access_control_policy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.accessControlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy">put_access_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy">reset_access_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_control_policy` <a name="put_access_control_policy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy"></a>

```python
def put_access_control_policy(
  owner: S3BucketAclAccessControlPolicyOwner,
  grant: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]] = None
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy.parameter.owner"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

owner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#owner S3BucketAcl#owner}

---

###### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy.parameter.grant"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grant S3BucketAcl#grant}

---

##### `reset_access_control_policy` <a name="reset_access_control_policy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy"></a>

```python
def reset_access_control_policy() -> None
```

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy">access_control_policy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput">access_control_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_control_policy`<sup>Required</sup> <a name="access_control_policy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy"></a>

```python
access_control_policy: S3BucketAclAccessControlPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a>

---

##### `access_control_policy_input`<sup>Optional</sup> <a name="access_control_policy_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput"></a>

```python
access_control_policy_input: S3BucketAclAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketAclAccessControlPolicy <a name="S3BucketAclAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicy(
  owner: S3BucketAclAccessControlPolicyOwner,
  grant: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | owner block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant">grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]</code> | grant block. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner"></a>

```python
owner: S3BucketAclAccessControlPolicyOwner
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

owner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#owner S3BucketAcl#owner}

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant"></a>

```python
grant: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grant S3BucketAcl#grant}

---

### S3BucketAclAccessControlPolicyGrant <a name="S3BucketAclAccessControlPolicyGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyGrant(
  permission: str,
  grantee: S3BucketAclAccessControlPolicyGrantGrantee = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | grantee block. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee"></a>

```python
grantee: S3BucketAclAccessControlPolicyGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grantee S3BucketAcl#grantee}

---

### S3BucketAclAccessControlPolicyGrantGrantee <a name="S3BucketAclAccessControlPolicyGrantGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee(
  type: str,
  email_address: str = None,
  id: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}.

---

### S3BucketAclAccessControlPolicyOwner <a name="S3BucketAclAccessControlPolicyOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyOwner(
  id: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}.

---

### S3BucketAclConfig <a name="S3BucketAclConfig" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  access_control_policy: S3BucketAclAccessControlPolicy = None,
  acl: str = None,
  expected_bucket_owner: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy">access_control_policy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `access_control_policy`<sup>Optional</sup> <a name="access_control_policy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy"></a>

```python
access_control_policy: S3BucketAclAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketAclAccessControlPolicyGrantGranteeOutputReference <a name="S3BucketAclAccessControlPolicyGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketAclAccessControlPolicyGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---


### S3BucketAclAccessControlPolicyGrantList <a name="S3BucketAclAccessControlPolicyGrantList" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketAclAccessControlPolicyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]

---


### S3BucketAclAccessControlPolicyGrantOutputReference <a name="S3BucketAclAccessControlPolicyGrantOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee">put_grantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee">reset_grantee</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grantee` <a name="put_grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee"></a>

```python
def put_grantee(
  type: str,
  email_address: str = None,
  id: str = None,
  uri: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}.

---

###### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.emailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}.

---

##### `reset_grantee` <a name="reset_grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee"></a>

```python
def reset_grantee() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput">grantee_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee"></a>

```python
grantee: S3BucketAclAccessControlPolicyGrantGranteeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a>

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput"></a>

```python
grantee_input: S3BucketAclAccessControlPolicyGrantGrantee
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketAclAccessControlPolicyGrant, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>, cdktf.IResolvable]

---


### S3BucketAclAccessControlPolicyOutputReference <a name="S3BucketAclAccessControlPolicyOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant">put_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner">put_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant">reset_grant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grant` <a name="put_grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant"></a>

```python
def put_grant(
  value: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]

---

##### `put_owner` <a name="put_owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner"></a>

```python
def put_owner(
  id: str,
  display_name: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}.

---

##### `reset_grant` <a name="reset_grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant"></a>

```python
def reset_grant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput">grant_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput">owner_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant"></a>

```python
grant: S3BucketAclAccessControlPolicyGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner"></a>

```python
owner: S3BucketAclAccessControlPolicyOwnerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a>

---

##### `grant_input`<sup>Optional</sup> <a name="grant_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput"></a>

```python
grant_input: typing.Union[IResolvable, typing.List[S3BucketAclAccessControlPolicyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>]]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput"></a>

```python
owner_input: S3BucketAclAccessControlPolicyOwner
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketAclAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---


### S3BucketAclAccessControlPolicyOwnerOutputReference <a name="S3BucketAclAccessControlPolicyOwnerOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_acl

s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketAclAccessControlPolicyOwner
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---



