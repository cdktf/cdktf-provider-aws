# `s3BucketLifecycleConfiguration` Submodule <a name="`s3BucketLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLifecycleConfiguration <a name="S3BucketLifecycleConfiguration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration(
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
  rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]],
  expected_bucket_owner: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]

---

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList">S3BucketLifecycleConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.rule"></a>

```python
rule: S3BucketLifecycleConfigurationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList">S3BucketLifecycleConfigurationRuleList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLifecycleConfigurationConfig <a name="S3BucketLifecycleConfigurationConfig" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]],
  expected_bucket_owner: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketLifecycleConfigurationRule <a name="S3BucketLifecycleConfigurationRule" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule(
  id: str,
  status: str,
  abort_incomplete_multipart_upload: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload = None,
  expiration: S3BucketLifecycleConfigurationRuleExpiration = None,
  filter: S3BucketLifecycleConfigurationRuleFilter = None,
  noncurrent_version_expiration: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration = None,
  noncurrent_version_transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition]] = None,
  prefix: str = None,
  transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleTransition]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#status S3BucketLifecycleConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | abort_incomplete_multipart_upload block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.transition">transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]</code> | transition block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#status S3BucketLifecycleConfiguration#status}.

---

##### `abort_incomplete_multipart_upload`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

abort_incomplete_multipart_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3BucketLifecycleConfiguration#abort_incomplete_multipart_upload}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.expiration"></a>

```python
expiration: S3BucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expiration S3BucketLifecycleConfiguration#expiration}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.filter"></a>

```python
filter: S3BucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#filter S3BucketLifecycleConfiguration#filter}

---

##### `noncurrent_version_expiration`<sup>Optional</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_version_expiration S3BucketLifecycleConfiguration#noncurrent_version_expiration}

---

##### `noncurrent_version_transition`<sup>Optional</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_version_transition S3BucketLifecycleConfiguration#noncurrent_version_transition}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}.

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.transition"></a>

```python
transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]

transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#transition S3BucketLifecycleConfiguration#transition}

---

### S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload <a name="S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload(
  days_after_initiation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}. |

---

##### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}.

---

### S3BucketLifecycleConfigurationRuleExpiration <a name="S3BucketLifecycleConfigurationRuleExpiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}.

---

##### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}.

---

### S3BucketLifecycleConfigurationRuleFilter <a name="S3BucketLifecycleConfigurationRuleFilter" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter(
  and: S3BucketLifecycleConfigurationRuleFilterAnd = None,
  object_size_greater_than: str = None,
  object_size_less_than: str = None,
  prefix: str = None,
  tag: S3BucketLifecycleConfigurationRuleFilterTag = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a></code> | and block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.objectSizeLessThan">object_size_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a></code> | tag block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.and"></a>

```python
and: S3BucketLifecycleConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#and S3BucketLifecycleConfiguration#and}

---

##### `object_size_greater_than`<sup>Optional</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}.

---

##### `object_size_less_than`<sup>Optional</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.objectSizeLessThan"></a>

```python
object_size_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.tag"></a>

```python
tag: S3BucketLifecycleConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tag S3BucketLifecycleConfiguration#tag}

---

### S3BucketLifecycleConfigurationRuleFilterAnd <a name="S3BucketLifecycleConfigurationRuleFilterAnd" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd(
  object_size_greater_than: typing.Union[int, float] = None,
  object_size_less_than: typing.Union[int, float] = None,
  prefix: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.objectSizeLessThan">object_size_less_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tags S3BucketLifecycleConfiguration#tags}. |

---

##### `object_size_greater_than`<sup>Optional</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}.

---

##### `object_size_less_than`<sup>Optional</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.objectSizeLessThan"></a>

```python
object_size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tags S3BucketLifecycleConfiguration#tags}.

---

### S3BucketLifecycleConfigurationRuleFilterTag <a name="S3BucketLifecycleConfigurationRuleFilterTag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#key S3BucketLifecycleConfiguration#key}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#value S3BucketLifecycleConfiguration#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#key S3BucketLifecycleConfiguration#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#value S3BucketLifecycleConfiguration#value}.

---

### S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration(
  newer_noncurrent_versions: str = None,
  noncurrent_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.newerNoncurrentVersions">newer_noncurrent_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}. |

---

##### `newer_noncurrent_versions`<sup>Optional</sup> <a name="newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.newerNoncurrentVersions"></a>

```python
newer_noncurrent_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}.

---

##### `noncurrent_days`<sup>Optional</sup> <a name="noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}.

---

### S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition(
  storage_class: str,
  newer_noncurrent_versions: str = None,
  noncurrent_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.newerNoncurrentVersions">newer_noncurrent_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}. |

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}.

---

##### `newer_noncurrent_versions`<sup>Optional</sup> <a name="newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.newerNoncurrentVersions"></a>

```python
newer_noncurrent_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}.

---

##### `noncurrent_days`<sup>Optional</sup> <a name="noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}.

---

### S3BucketLifecycleConfigurationRuleTransition <a name="S3BucketLifecycleConfigurationRuleTransition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition(
  storage_class: str,
  date: str = None,
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}. |

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference <a name="S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">reset_days_after_initiation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_after_initiation` <a name="reset_days_after_initiation" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```python
def reset_days_after_initiation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">days_after_initiation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_initiation_input`<sup>Optional</sup> <a name="days_after_initiation_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```python
days_after_initiation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---


### S3BucketLifecycleConfigurationRuleExpirationOutputReference <a name="S3BucketLifecycleConfigurationRuleExpirationOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">reset_expired_object_delete_marker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_expired_object_delete_marker` <a name="reset_expired_object_delete_marker" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```python
def reset_expired_object_delete_marker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expired_object_delete_marker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker_input`<sup>Optional</sup> <a name="expired_object_delete_marker_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```python
expired_object_delete_marker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker`<sup>Required</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

---


### S3BucketLifecycleConfigurationRuleFilterAndOutputReference <a name="S3BucketLifecycleConfigurationRuleFilterAndOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetObjectSizeGreaterThan">reset_object_size_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetObjectSizeLessThan">reset_object_size_less_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_size_greater_than` <a name="reset_object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetObjectSizeGreaterThan"></a>

```python
def reset_object_size_greater_than() -> None
```

##### `reset_object_size_less_than` <a name="reset_object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetObjectSizeLessThan"></a>

```python
def reset_object_size_less_than() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeGreaterThanInput">object_size_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeLessThanInput">object_size_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeLessThan">object_size_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_size_greater_than_input`<sup>Optional</sup> <a name="object_size_greater_than_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeGreaterThanInput"></a>

```python
object_size_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_size_less_than_input`<sup>Optional</sup> <a name="object_size_less_than_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeLessThanInput"></a>

```python
object_size_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `object_size_greater_than`<sup>Required</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_size_less_than`<sup>Required</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.objectSizeLessThan"></a>

```python
object_size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a>

---


### S3BucketLifecycleConfigurationRuleFilterOutputReference <a name="S3BucketLifecycleConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetObjectSizeGreaterThan">reset_object_size_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetObjectSizeLessThan">reset_object_size_less_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd"></a>

```python
def put_and(
  object_size_greater_than: typing.Union[int, float] = None,
  object_size_less_than: typing.Union[int, float] = None,
  prefix: str = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `object_size_greater_than`<sup>Optional</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd.parameter.objectSizeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}.

---

###### `object_size_less_than`<sup>Optional</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd.parameter.objectSizeLessThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putAnd.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tags S3BucketLifecycleConfiguration#tags}.

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putTag"></a>

```python
def put_tag(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putTag.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#key S3BucketLifecycleConfiguration#key}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.putTag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#value S3BucketLifecycleConfiguration#value}.

---

##### `reset_and` <a name="reset_and" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_object_size_greater_than` <a name="reset_object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetObjectSizeGreaterThan"></a>

```python
def reset_object_size_greater_than() -> None
```

##### `reset_object_size_less_than` <a name="reset_object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetObjectSizeLessThan"></a>

```python
def reset_object_size_less_than() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference">S3BucketLifecycleConfigurationRuleFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference">S3BucketLifecycleConfigurationRuleFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.andInput">and_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeGreaterThanInput">object_size_greater_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeLessThanInput">object_size_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.tagInput">tag_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeLessThan">object_size_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.and"></a>

```python
and: S3BucketLifecycleConfigurationRuleFilterAndOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference">S3BucketLifecycleConfigurationRuleFilterAndOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.tag"></a>

```python
tag: S3BucketLifecycleConfigurationRuleFilterTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference">S3BucketLifecycleConfigurationRuleFilterTagOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.andInput"></a>

```python
and_input: S3BucketLifecycleConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a>

---

##### `object_size_greater_than_input`<sup>Optional</sup> <a name="object_size_greater_than_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeGreaterThanInput"></a>

```python
object_size_greater_than_input: str
```

- *Type:* str

---

##### `object_size_less_than_input`<sup>Optional</sup> <a name="object_size_less_than_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeLessThanInput"></a>

```python
object_size_less_than_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.tagInput"></a>

```python
tag_input: S3BucketLifecycleConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a>

---

##### `object_size_greater_than`<sup>Required</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: str
```

- *Type:* str

---

##### `object_size_less_than`<sup>Required</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.objectSizeLessThan"></a>

```python
object_size_less_than: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

---


### S3BucketLifecycleConfigurationRuleFilterTagOutputReference <a name="S3BucketLifecycleConfigurationRuleFilterTagOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a>

---


### S3BucketLifecycleConfigurationRuleList <a name="S3BucketLifecycleConfigurationRuleList" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>]]

---


### S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNewerNoncurrentVersions">reset_newer_noncurrent_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNoncurrentDays">reset_noncurrent_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_newer_noncurrent_versions` <a name="reset_newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNewerNoncurrentVersions"></a>

```python
def reset_newer_noncurrent_versions() -> None
```

##### `reset_noncurrent_days` <a name="reset_noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNoncurrentDays"></a>

```python
def reset_noncurrent_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.newerNoncurrentVersionsInput">newer_noncurrent_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDaysInput">noncurrent_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.newerNoncurrentVersions">newer_noncurrent_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `newer_noncurrent_versions_input`<sup>Optional</sup> <a name="newer_noncurrent_versions_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.newerNoncurrentVersionsInput"></a>

```python
newer_noncurrent_versions_input: str
```

- *Type:* str

---

##### `noncurrent_days_input`<sup>Optional</sup> <a name="noncurrent_days_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDaysInput"></a>

```python
noncurrent_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `newer_noncurrent_versions`<sup>Required</sup> <a name="newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.newerNoncurrentVersions"></a>

```python
newer_noncurrent_versions: str
```

- *Type:* str

---

##### `noncurrent_days`<sup>Required</sup> <a name="noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]

---


### S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resetNewerNoncurrentVersions">reset_newer_noncurrent_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resetNoncurrentDays">reset_noncurrent_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_newer_noncurrent_versions` <a name="reset_newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resetNewerNoncurrentVersions"></a>

```python
def reset_newer_noncurrent_versions() -> None
```

##### `reset_noncurrent_days` <a name="reset_noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.resetNoncurrentDays"></a>

```python
def reset_noncurrent_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.newerNoncurrentVersionsInput">newer_noncurrent_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.noncurrentDaysInput">noncurrent_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.newerNoncurrentVersions">newer_noncurrent_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `newer_noncurrent_versions_input`<sup>Optional</sup> <a name="newer_noncurrent_versions_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.newerNoncurrentVersionsInput"></a>

```python
newer_noncurrent_versions_input: str
```

- *Type:* str

---

##### `noncurrent_days_input`<sup>Optional</sup> <a name="noncurrent_days_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.noncurrentDaysInput"></a>

```python
noncurrent_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `newer_noncurrent_versions`<sup>Required</sup> <a name="newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.newerNoncurrentVersions"></a>

```python
newer_noncurrent_versions: str
```

- *Type:* str

---

##### `noncurrent_days`<sup>Required</sup> <a name="noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>, cdktf.IResolvable]

---


### S3BucketLifecycleConfigurationRuleOutputReference <a name="S3BucketLifecycleConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload">put_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration">put_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionTransition">put_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putTransition">put_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload">reset_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionExpiration">reset_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionTransition">reset_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetTransition">reset_transition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_incomplete_multipart_upload` <a name="put_abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload"></a>

```python
def put_abort_incomplete_multipart_upload(
  days_after_initiation: typing.Union[int, float] = None
) -> None
```

###### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload.parameter.daysAfterInitiation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}.

---

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
) -> None
```

###### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.date"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}.

---

###### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.expiredObjectDeleteMarker"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter"></a>

```python
def put_filter(
  and: S3BucketLifecycleConfigurationRuleFilterAnd = None,
  object_size_greater_than: str = None,
  object_size_less_than: str = None,
  prefix: str = None,
  tag: S3BucketLifecycleConfigurationRuleFilterTag = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.and"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAnd">S3BucketLifecycleConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#and S3BucketLifecycleConfiguration#and}

---

###### `object_size_greater_than`<sup>Optional</sup> <a name="object_size_greater_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.objectSizeGreaterThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}.

---

###### `object_size_less_than`<sup>Optional</sup> <a name="object_size_less_than" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.objectSizeLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}.

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTag">S3BucketLifecycleConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tag S3BucketLifecycleConfiguration#tag}

---

##### `put_noncurrent_version_expiration` <a name="put_noncurrent_version_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration"></a>

```python
def put_noncurrent_version_expiration(
  newer_noncurrent_versions: str = None,
  noncurrent_days: typing.Union[int, float] = None
) -> None
```

###### `newer_noncurrent_versions`<sup>Optional</sup> <a name="newer_noncurrent_versions" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration.parameter.newerNoncurrentVersions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}.

---

###### `noncurrent_days`<sup>Optional</sup> <a name="noncurrent_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration.parameter.noncurrentDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}.

---

##### `put_noncurrent_version_transition` <a name="put_noncurrent_version_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionTransition"></a>

```python
def put_noncurrent_version_transition(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]

---

##### `put_transition` <a name="put_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putTransition"></a>

```python
def put_transition(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]

---

##### `reset_abort_incomplete_multipart_upload` <a name="reset_abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload"></a>

```python
def reset_abort_incomplete_multipart_upload() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_noncurrent_version_expiration` <a name="reset_noncurrent_version_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```python
def reset_noncurrent_version_expiration() -> None
```

##### `reset_noncurrent_version_transition` <a name="reset_noncurrent_version_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionTransition"></a>

```python
def reset_noncurrent_version_transition() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_transition` <a name="reset_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetTransition"></a>

```python
def reset_transition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference">S3BucketLifecycleConfigurationRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference">S3BucketLifecycleConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList">S3BucketLifecycleConfigurationRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput">abort_incomplete_multipart_upload_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrent_version_expiration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionTransitionInput">noncurrent_version_transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.transitionInput">transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload`<sup>Required</sup> <a name="abort_incomplete_multipart_upload" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expiration"></a>

```python
expiration: S3BucketLifecycleConfigurationRuleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference">S3BucketLifecycleConfigurationRuleExpirationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filter"></a>

```python
filter: S3BucketLifecycleConfigurationRuleFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference">S3BucketLifecycleConfigurationRuleFilterOutputReference</a>

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference</a>

---

##### `noncurrent_version_transition`<sup>Required</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.transition"></a>

```python
transition: S3BucketLifecycleConfigurationRuleTransitionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList">S3BucketLifecycleConfigurationRuleTransitionList</a>

---

##### `abort_incomplete_multipart_upload_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```python
abort_incomplete_multipart_upload_input: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: S3BucketLifecycleConfigurationRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filterInput"></a>

```python
filter_input: S3BucketLifecycleConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `noncurrent_version_expiration_input`<sup>Optional</sup> <a name="noncurrent_version_expiration_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```python
noncurrent_version_expiration_input: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

---

##### `noncurrent_version_transition_input`<sup>Optional</sup> <a name="noncurrent_version_transition_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```python
noncurrent_version_transition_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition">S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition</a>]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `transition_input`<sup>Optional</sup> <a name="transition_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.transitionInput"></a>

```python
transition_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleConfigurationRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>, cdktf.IResolvable]

---


### S3BucketLifecycleConfigurationRuleTransitionList <a name="S3BucketLifecycleConfigurationRuleTransitionList" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleConfigurationRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleConfigurationRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>]]

---


### S3BucketLifecycleConfigurationRuleTransitionOutputReference <a name="S3BucketLifecycleConfigurationRuleTransitionOutputReference" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_lifecycle_configuration

s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleConfigurationRuleTransition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransition">S3BucketLifecycleConfigurationRuleTransition</a>, cdktf.IResolvable]

---



