# `dataAwsSignerSigningJob` Submodule <a name="`dataAwsSignerSigningJob` Submodule" id="@cdktf/provider-aws.dataAwsSignerSigningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSignerSigningJob <a name="DataAwsSignerSigningJob" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job aws_signer_signing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#id DataAwsSignerSigningJob#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#id DataAwsSignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.completedAt">completed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobInvoker">job_invoker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobOwner">job_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformDisplayName">platform_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformId">platform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileVersion">profile_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.requestedBy">requested_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.revocationRecord">revocation_record</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList">DataAwsSignerSigningJobRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signatureExpiresAt">signature_expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signedObject">signed_object</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList">DataAwsSignerSigningJobSignedObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList">DataAwsSignerSigningJobSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `completed_at`<sup>Required</sup> <a name="completed_at" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.completedAt"></a>

```python
completed_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `job_invoker`<sup>Required</sup> <a name="job_invoker" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobInvoker"></a>

```python
job_invoker: str
```

- *Type:* str

---

##### `job_owner`<sup>Required</sup> <a name="job_owner" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobOwner"></a>

```python
job_owner: str
```

- *Type:* str

---

##### `platform_display_name`<sup>Required</sup> <a name="platform_display_name" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformDisplayName"></a>

```python
platform_display_name: str
```

- *Type:* str

---

##### `platform_id`<sup>Required</sup> <a name="platform_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformId"></a>

```python
platform_id: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `profile_version`<sup>Required</sup> <a name="profile_version" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileVersion"></a>

```python
profile_version: str
```

- *Type:* str

---

##### `requested_by`<sup>Required</sup> <a name="requested_by" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.requestedBy"></a>

```python
requested_by: str
```

- *Type:* str

---

##### `revocation_record`<sup>Required</sup> <a name="revocation_record" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.revocationRecord"></a>

```python
revocation_record: DataAwsSignerSigningJobRevocationRecordList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList">DataAwsSignerSigningJobRevocationRecordList</a>

---

##### `signature_expires_at`<sup>Required</sup> <a name="signature_expires_at" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signatureExpiresAt"></a>

```python
signature_expires_at: str
```

- *Type:* str

---

##### `signed_object`<sup>Required</sup> <a name="signed_object" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signedObject"></a>

```python
signed_object: DataAwsSignerSigningJobSignedObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList">DataAwsSignerSigningJobSignedObjectList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.source"></a>

```python
source: DataAwsSignerSigningJobSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList">DataAwsSignerSigningJobSourceList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSignerSigningJobConfig <a name="DataAwsSignerSigningJobConfig" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#id DataAwsSignerSigningJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job#id DataAwsSignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSignerSigningJobRevocationRecord <a name="DataAwsSignerSigningJobRevocationRecord" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord()
```


### DataAwsSignerSigningJobSignedObject <a name="DataAwsSignerSigningJobSignedObject" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject()
```


### DataAwsSignerSigningJobSignedObjectS3 <a name="DataAwsSignerSigningJobSignedObjectS3" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3()
```


### DataAwsSignerSigningJobSource <a name="DataAwsSignerSigningJobSource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSource()
```


### DataAwsSignerSigningJobSourceS3 <a name="DataAwsSignerSigningJobSourceS3" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSignerSigningJobRevocationRecordList <a name="DataAwsSignerSigningJobRevocationRecordList" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSignerSigningJobRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSignerSigningJobRevocationRecordOutputReference <a name="DataAwsSignerSigningJobRevocationRecordOutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedAt">revoked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedBy">revoked_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord">DataAwsSignerSigningJobRevocationRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revoked_at`<sup>Required</sup> <a name="revoked_at" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedAt"></a>

```python
revoked_at: str
```

- *Type:* str

---

##### `revoked_by`<sup>Required</sup> <a name="revoked_by" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedBy"></a>

```python
revoked_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSignerSigningJobRevocationRecord
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord">DataAwsSignerSigningJobRevocationRecord</a>

---


### DataAwsSignerSigningJobSignedObjectList <a name="DataAwsSignerSigningJobSignedObjectList" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSignerSigningJobSignedObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSignerSigningJobSignedObjectOutputReference <a name="DataAwsSignerSigningJobSignedObjectOutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List">DataAwsSignerSigningJobSignedObjectS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject">DataAwsSignerSigningJobSignedObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.s3"></a>

```python
s3: DataAwsSignerSigningJobSignedObjectS3List
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List">DataAwsSignerSigningJobSignedObjectS3List</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSignerSigningJobSignedObject
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject">DataAwsSignerSigningJobSignedObject</a>

---


### DataAwsSignerSigningJobSignedObjectS3List <a name="DataAwsSignerSigningJobSignedObjectS3List" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSignerSigningJobSignedObjectS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSignerSigningJobSignedObjectS3OutputReference <a name="DataAwsSignerSigningJobSignedObjectS3OutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3">DataAwsSignerSigningJobSignedObjectS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSignerSigningJobSignedObjectS3
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3">DataAwsSignerSigningJobSignedObjectS3</a>

---


### DataAwsSignerSigningJobSourceList <a name="DataAwsSignerSigningJobSourceList" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSignerSigningJobSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSignerSigningJobSourceOutputReference <a name="DataAwsSignerSigningJobSourceOutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List">DataAwsSignerSigningJobSourceS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource">DataAwsSignerSigningJobSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.s3"></a>

```python
s3: DataAwsSignerSigningJobSourceS3List
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List">DataAwsSignerSigningJobSourceS3List</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSignerSigningJobSource
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource">DataAwsSignerSigningJobSource</a>

---


### DataAwsSignerSigningJobSourceS3List <a name="DataAwsSignerSigningJobSourceS3List" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSignerSigningJobSourceS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSignerSigningJobSourceS3OutputReference <a name="DataAwsSignerSigningJobSourceS3OutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_signer_signing_job

dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3">DataAwsSignerSigningJobSourceS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSignerSigningJobSourceS3
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3">DataAwsSignerSigningJobSourceS3</a>

---



