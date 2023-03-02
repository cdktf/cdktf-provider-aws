# `s3BucketReplicationConfiguration` Submodule <a name="`s3BucketReplicationConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketReplicationConfigurationA <a name="S3BucketReplicationConfigurationA" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA(
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
  role: str,
  rule: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]],
  id: str = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule"></a>

```python
rule: S3BucketReplicationConfigurationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketReplicationConfigurationAConfig <a name="S3BucketReplicationConfigurationAConfig" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  role: str,
  rule: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]],
  id: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}.

---

### S3BucketReplicationConfigurationRule <a name="S3BucketReplicationConfigurationRule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule(
  destination: S3BucketReplicationConfigurationRuleDestination,
  status: str,
  delete_marker_replication: S3BucketReplicationConfigurationRuleDeleteMarkerReplication = None,
  existing_object_replication: S3BucketReplicationConfigurationRuleExistingObjectReplication = None,
  filter: S3BucketReplicationConfigurationRuleFilter = None,
  id: str = None,
  prefix: str = None,
  priority: typing.Union[int, float] = None,
  source_selection_criteria: S3BucketReplicationConfigurationRuleSourceSelectionCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication">delete_marker_replication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | delete_marker_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication">existing_object_replication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | existing_object_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria">source_selection_criteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | source_selection_criteria block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination"></a>

```python
destination: S3BucketReplicationConfigurationRuleDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#destination S3BucketReplicationConfigurationA#destination}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `delete_marker_replication`<sup>Optional</sup> <a name="delete_marker_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication"></a>

```python
delete_marker_replication: S3BucketReplicationConfigurationRuleDeleteMarkerReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

delete_marker_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}

---

##### `existing_object_replication`<sup>Optional</sup> <a name="existing_object_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication"></a>

```python
existing_object_replication: S3BucketReplicationConfigurationRuleExistingObjectReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

existing_object_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter"></a>

```python
filter: S3BucketReplicationConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#filter S3BucketReplicationConfigurationA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}.

---

##### `source_selection_criteria`<sup>Optional</sup> <a name="source_selection_criteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria"></a>

```python
source_selection_criteria: S3BucketReplicationConfigurationRuleSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

source_selection_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}

---

### S3BucketReplicationConfigurationRuleDeleteMarkerReplication <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleDestination <a name="S3BucketReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination(
  bucket: str,
  access_control_translation: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation = None,
  account: str = None,
  encryption_configuration: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration = None,
  metrics: S3BucketReplicationConfigurationRuleDestinationMetrics = None,
  replication_time: S3BucketReplicationConfigurationRuleDestinationReplicationTime = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation">access_control_translation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | access_control_translation block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account">account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime">replication_time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | replication_time block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `access_control_translation`<sup>Optional</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation"></a>

```python
access_control_translation: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account"></a>

```python
account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics"></a>

```python
metrics: S3BucketReplicationConfigurationRuleDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#metrics S3BucketReplicationConfigurationA#metrics}

---

##### `replication_time`<sup>Optional</sup> <a name="replication_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime"></a>

```python
replication_time: S3BucketReplicationConfigurationRuleDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replication_time S3BucketReplicationConfigurationA#replication_time}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}.

---

### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation(
  owner: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}.

---

### S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration(
  replica_kms_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId">replica_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}. |

---

##### `replica_kms_key_id`<sup>Required</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId"></a>

```python
replica_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}.

---

### S3BucketReplicationConfigurationRuleDestinationMetrics <a name="S3BucketReplicationConfigurationRuleDestinationMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics(
  status: str,
  event_threshold: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold">event_threshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | event_threshold block. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `event_threshold`<sup>Optional</sup> <a name="event_threshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold"></a>

```python
event_threshold: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

event_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#event_threshold S3BucketReplicationConfigurationA#event_threshold}

---

### S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold(
  minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime(
  status: str,
  time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time">time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | time block. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time"></a>

```python
time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#time S3BucketReplicationConfigurationA#time}

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime(
  minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleExistingObjectReplication <a name="S3BucketReplicationConfigurationRuleExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleFilter <a name="S3BucketReplicationConfigurationRuleFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter(
  and: S3BucketReplicationConfigurationRuleFilterAnd = None,
  prefix: str = None,
  tag: S3BucketReplicationConfigurationRuleFilterTag = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | and block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | tag block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and"></a>

```python
and: S3BucketReplicationConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#and S3BucketReplicationConfigurationA#and}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag"></a>

```python
tag: S3BucketReplicationConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tag S3BucketReplicationConfigurationA#tag}

---

### S3BucketReplicationConfigurationRuleFilterAnd <a name="S3BucketReplicationConfigurationRuleFilterAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd(
  prefix: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}.

---

### S3BucketReplicationConfigurationRuleFilterTag <a name="S3BucketReplicationConfigurationRuleFilterTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteria <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria(
  replica_modifications: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications = None,
  sse_kms_encrypted_objects: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications">replica_modifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | replica_modifications block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects">sse_kms_encrypted_objects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | sse_kms_encrypted_objects block. |

---

##### `replica_modifications`<sup>Optional</sup> <a name="replica_modifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications"></a>

```python
replica_modifications: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

replica_modifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}

---

##### `sse_kms_encrypted_objects`<sup>Optional</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

```python
sse_kms_encrypted_objects: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDeleteMarkerReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---


### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---


### S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput">replica_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId">replica_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replica_kms_key_id_input`<sup>Optional</sup> <a name="replica_kms_key_id_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput"></a>

```python
replica_kms_key_id_input: str
```

- *Type:* str

---

##### `replica_kms_key_id`<sup>Required</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId"></a>

```python
replica_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold">put_event_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold">reset_event_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_threshold` <a name="put_event_threshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold"></a>

```python
def put_event_threshold(
  minutes: typing.Union[int, float]
) -> None
```

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

##### `reset_event_threshold` <a name="reset_event_threshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold"></a>

```python
def reset_event_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold">event_threshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput">event_threshold_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_threshold`<sup>Required</sup> <a name="event_threshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold"></a>

```python
event_threshold: S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a>

---

##### `event_threshold_input`<sup>Optional</sup> <a name="event_threshold_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput"></a>

```python
event_threshold_input: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---


### S3BucketReplicationConfigurationRuleDestinationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation">put_access_control_translation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime">put_replication_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation">reset_access_control_translation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime">reset_replication_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_control_translation` <a name="put_access_control_translation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation"></a>

```python
def put_access_control_translation(
  owner: str
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}.

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  replica_kms_key_id: str
) -> None
```

###### `replica_kms_key_id`<sup>Required</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration.parameter.replicaKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}.

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics"></a>

```python
def put_metrics(
  status: str,
  event_threshold: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold = None
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

###### `event_threshold`<sup>Optional</sup> <a name="event_threshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics.parameter.eventThreshold"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

event_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#event_threshold S3BucketReplicationConfigurationA#event_threshold}

---

##### `put_replication_time` <a name="put_replication_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime"></a>

```python
def put_replication_time(
  status: str,
  time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime.parameter.time"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#time S3BucketReplicationConfigurationA#time}

---

##### `reset_access_control_translation` <a name="reset_access_control_translation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation"></a>

```python
def reset_access_control_translation() -> None
```

##### `reset_account` <a name="reset_account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_replication_time` <a name="reset_replication_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime"></a>

```python
def reset_replication_time() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation">access_control_translation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime">replication_time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput">access_control_translation_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput">metrics_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput">replication_time_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_translation`<sup>Required</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation"></a>

```python
access_control_translation: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics"></a>

```python
metrics: S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a>

---

##### `replication_time`<sup>Required</sup> <a name="replication_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime"></a>

```python
replication_time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a>

---

##### `access_control_translation_input`<sup>Optional</sup> <a name="access_control_translation_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput"></a>

```python
access_control_translation_input: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput"></a>

```python
metrics_input: S3BucketReplicationConfigurationRuleDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---

##### `replication_time_input`<sup>Optional</sup> <a name="replication_time_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput"></a>

```python
replication_time_input: S3BucketReplicationConfigurationRuleDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime">put_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time` <a name="put_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime"></a>

```python
def put_time(
  minutes: typing.Union[int, float]
) -> None
```

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput">time_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time"></a>

```python
time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput"></a>

```python
time_input: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


### S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleExistingObjectReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---


### S3BucketReplicationConfigurationRuleFilterAndOutputReference <a name="S3BucketReplicationConfigurationRuleFilterAndOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---


### S3BucketReplicationConfigurationRuleFilterOutputReference <a name="S3BucketReplicationConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd"></a>

```python
def put_and(
  prefix: str = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}.

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag"></a>

```python
def put_tag(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}.

---

##### `reset_and` <a name="reset_and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput">and_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput">tag_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and"></a>

```python
and: S3BucketReplicationConfigurationRuleFilterAndOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag"></a>

```python
tag: S3BucketReplicationConfigurationRuleFilterTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput"></a>

```python
and_input: S3BucketReplicationConfigurationRuleFilterAnd
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput"></a>

```python
tag_input: S3BucketReplicationConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---


### S3BucketReplicationConfigurationRuleFilterTagOutputReference <a name="S3BucketReplicationConfigurationRuleFilterTagOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleFilterTag
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---


### S3BucketReplicationConfigurationRuleList <a name="S3BucketReplicationConfigurationRuleList" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketReplicationConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>]]

---


### S3BucketReplicationConfigurationRuleOutputReference <a name="S3BucketReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication">put_delete_marker_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication">put_existing_object_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria">put_source_selection_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication">reset_delete_marker_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication">reset_existing_object_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria">reset_source_selection_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delete_marker_replication` <a name="put_delete_marker_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication"></a>

```python
def put_delete_marker_replication(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination"></a>

```python
def put_destination(
  bucket: str,
  access_control_translation: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation = None,
  account: str = None,
  encryption_configuration: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration = None,
  metrics: S3BucketReplicationConfigurationRuleDestinationMetrics = None,
  replication_time: S3BucketReplicationConfigurationRuleDestinationReplicationTime = None,
  storage_class: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

###### `access_control_translation`<sup>Optional</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.accessControlTranslation"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}

---

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.account"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}.

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}

---

###### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.metrics"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#metrics S3BucketReplicationConfigurationA#metrics}

---

###### `replication_time`<sup>Optional</sup> <a name="replication_time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.replicationTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replication_time S3BucketReplicationConfigurationA#replication_time}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}.

---

##### `put_existing_object_replication` <a name="put_existing_object_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication"></a>

```python
def put_existing_object_replication(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter"></a>

```python
def put_filter(
  and: S3BucketReplicationConfigurationRuleFilterAnd = None,
  prefix: str = None,
  tag: S3BucketReplicationConfigurationRuleFilterTag = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter.parameter.and"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#and S3BucketReplicationConfigurationA#and}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tag S3BucketReplicationConfigurationA#tag}

---

##### `put_source_selection_criteria` <a name="put_source_selection_criteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria"></a>

```python
def put_source_selection_criteria(
  replica_modifications: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications = None,
  sse_kms_encrypted_objects: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects = None
) -> None
```

###### `replica_modifications`<sup>Optional</sup> <a name="replica_modifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria.parameter.replicaModifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

replica_modifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}

---

###### `sse_kms_encrypted_objects`<sup>Optional</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria.parameter.sseKmsEncryptedObjects"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}

---

##### `reset_delete_marker_replication` <a name="reset_delete_marker_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication"></a>

```python
def reset_delete_marker_replication() -> None
```

##### `reset_existing_object_replication` <a name="reset_existing_object_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication"></a>

```python
def reset_existing_object_replication() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_source_selection_criteria` <a name="reset_source_selection_criteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria"></a>

```python
def reset_source_selection_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication">delete_marker_replication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication">existing_object_replication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria">source_selection_criteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput">delete_marker_replication_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput">existing_object_replication_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput">source_selection_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_marker_replication`<sup>Required</sup> <a name="delete_marker_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication"></a>

```python
delete_marker_replication: S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination"></a>

```python
destination: S3BucketReplicationConfigurationRuleDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a>

---

##### `existing_object_replication`<sup>Required</sup> <a name="existing_object_replication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication"></a>

```python
existing_object_replication: S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter"></a>

```python
filter: S3BucketReplicationConfigurationRuleFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a>

---

##### `source_selection_criteria`<sup>Required</sup> <a name="source_selection_criteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria"></a>

```python
source_selection_criteria: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a>

---

##### `delete_marker_replication_input`<sup>Optional</sup> <a name="delete_marker_replication_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput"></a>

```python
delete_marker_replication_input: S3BucketReplicationConfigurationRuleDeleteMarkerReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```python
destination_input: S3BucketReplicationConfigurationRuleDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---

##### `existing_object_replication_input`<sup>Optional</sup> <a name="existing_object_replication_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput"></a>

```python
existing_object_replication_input: S3BucketReplicationConfigurationRuleExistingObjectReplication
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput"></a>

```python
filter_input: S3BucketReplicationConfigurationRuleFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_selection_criteria_input`<sup>Optional</sup> <a name="source_selection_criteria_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput"></a>

```python
source_selection_criteria_input: S3BucketReplicationConfigurationRuleSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketReplicationConfigurationRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule">S3BucketReplicationConfigurationRule</a>, cdktf.IResolvable]

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications">put_replica_modifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects">put_sse_kms_encrypted_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications">reset_replica_modifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects">reset_sse_kms_encrypted_objects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_replica_modifications` <a name="put_replica_modifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications"></a>

```python
def put_replica_modifications(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `put_sse_kms_encrypted_objects` <a name="put_sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects"></a>

```python
def put_sse_kms_encrypted_objects(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `reset_replica_modifications` <a name="reset_replica_modifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications"></a>

```python
def reset_replica_modifications() -> None
```

##### `reset_sse_kms_encrypted_objects` <a name="reset_sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects"></a>

```python
def reset_sse_kms_encrypted_objects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications">replica_modifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sse_kms_encrypted_objects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput">replica_modifications_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput">sse_kms_encrypted_objects_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replica_modifications`<sup>Required</sup> <a name="replica_modifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications"></a>

```python
replica_modifications: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a>

---

##### `sse_kms_encrypted_objects`<sup>Required</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```python
sse_kms_encrypted_objects: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a>

---

##### `replica_modifications_input`<sup>Optional</sup> <a name="replica_modifications_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput"></a>

```python
replica_modifications_input: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---

##### `sse_kms_encrypted_objects_input`<sup>Optional</sup> <a name="sse_kms_encrypted_objects_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput"></a>

```python
sse_kms_encrypted_objects_input: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_replication_configuration

s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---



