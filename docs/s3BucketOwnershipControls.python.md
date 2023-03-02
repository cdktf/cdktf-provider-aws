# `s3BucketOwnershipControls` Submodule <a name="`s3BucketOwnershipControls` Submodule" id="@cdktf/provider-aws.s3BucketOwnershipControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketOwnershipControls <a name="S3BucketOwnershipControls" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls aws_s3_bucket_ownership_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControls(
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
  rule: S3BucketOwnershipControlsRule,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#rule S3BucketOwnershipControls#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule"></a>

```python
def put_rule(
  object_ownership: str
) -> None
```

###### `object_ownership`<sup>Required</sup> <a name="object_ownership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule.parameter.objectOwnership"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControls.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput">rule_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule"></a>

```python
rule: S3BucketOwnershipControlsRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput"></a>

```python
rule_input: S3BucketOwnershipControlsRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketOwnershipControlsConfig <a name="S3BucketOwnershipControlsConfig" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  rule: S3BucketOwnershipControlsRule,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule"></a>

```python
rule: S3BucketOwnershipControlsRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#rule S3BucketOwnershipControls#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketOwnershipControlsRule <a name="S3BucketOwnershipControlsRule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControlsRule(
  object_ownership: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership">object_ownership</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}. |

---

##### `object_ownership`<sup>Required</sup> <a name="object_ownership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership"></a>

```python
object_ownership: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketOwnershipControlsRuleOutputReference <a name="S3BucketOwnershipControlsRuleOutputReference" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_ownership_controls

s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput">object_ownership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership">object_ownership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_ownership_input`<sup>Optional</sup> <a name="object_ownership_input" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput"></a>

```python
object_ownership_input: str
```

- *Type:* str

---

##### `object_ownership`<sup>Required</sup> <a name="object_ownership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership"></a>

```python
object_ownership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketOwnershipControlsRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---



