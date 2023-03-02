# `signerSigningJob` Submodule <a name="`signerSigningJob` Submodule" id="@cdktf/provider-aws.signerSigningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningJob <a name="SignerSigningJob" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job aws_signer_signing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: SignerSigningJobDestination,
  profile_name: str,
  source: SignerSigningJobSource,
  id: str = None,
  ignore_signing_job_failure: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.ignoreSigningJobFailure">ignore_signing_job_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#destination SignerSigningJob#destination}

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#source SignerSigningJob#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_signing_job_failure`<sup>Optional</sup> <a name="ignore_signing_job_failure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.ignoreSigningJobFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure">reset_ignore_signing_job_failure</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination"></a>

```python
def put_destination(
  s3: SignerSigningJobDestinationS3
) -> None
```

###### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource"></a>

```python
def put_source(
  s3: SignerSigningJobSourceS3
) -> None
```

###### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_signing_job_failure` <a name="reset_ignore_signing_job_failure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure"></a>

```python
def reset_ignore_signing_job_failure() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt">completed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker">job_invoker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner">job_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName">platform_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId">platform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion">profile_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy">requested_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord">revocation_record</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt">signature_expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject">signed_object</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput">ignore_signing_job_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure">ignore_signing_job_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `completed_at`<sup>Required</sup> <a name="completed_at" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt"></a>

```python
completed_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination"></a>

```python
destination: SignerSigningJobDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a>

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_invoker`<sup>Required</sup> <a name="job_invoker" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker"></a>

```python
job_invoker: str
```

- *Type:* str

---

##### `job_owner`<sup>Required</sup> <a name="job_owner" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner"></a>

```python
job_owner: str
```

- *Type:* str

---

##### `platform_display_name`<sup>Required</sup> <a name="platform_display_name" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName"></a>

```python
platform_display_name: str
```

- *Type:* str

---

##### `platform_id`<sup>Required</sup> <a name="platform_id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId"></a>

```python
platform_id: str
```

- *Type:* str

---

##### `profile_version`<sup>Required</sup> <a name="profile_version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion"></a>

```python
profile_version: str
```

- *Type:* str

---

##### `requested_by`<sup>Required</sup> <a name="requested_by" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy"></a>

```python
requested_by: str
```

- *Type:* str

---

##### `revocation_record`<sup>Required</sup> <a name="revocation_record" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord"></a>

```python
revocation_record: SignerSigningJobRevocationRecordList
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a>

---

##### `signature_expires_at`<sup>Required</sup> <a name="signature_expires_at" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt"></a>

```python
signature_expires_at: str
```

- *Type:* str

---

##### `signed_object`<sup>Required</sup> <a name="signed_object" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject"></a>

```python
signed_object: SignerSigningJobSignedObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source"></a>

```python
source: SignerSigningJobSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput"></a>

```python
destination_input: SignerSigningJobDestination
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_signing_job_failure_input`<sup>Optional</sup> <a name="ignore_signing_job_failure_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput"></a>

```python
ignore_signing_job_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput"></a>

```python
source_input: SignerSigningJobSource
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_signing_job_failure`<sup>Required</sup> <a name="ignore_signing_job_failure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure"></a>

```python
ignore_signing_job_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningJobConfig <a name="SignerSigningJobConfig" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: SignerSigningJobDestination,
  profile_name: str,
  source: SignerSigningJobSource,
  id: str = None,
  ignore_signing_job_failure: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure">ignore_signing_job_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination"></a>

```python
destination: SignerSigningJobDestination
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#destination SignerSigningJob#destination}

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source"></a>

```python
source: SignerSigningJobSource
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#source SignerSigningJob#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_signing_job_failure`<sup>Optional</sup> <a name="ignore_signing_job_failure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure"></a>

```python
ignore_signing_job_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.

---

### SignerSigningJobDestination <a name="SignerSigningJobDestination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobDestination(
  s3: SignerSigningJobDestinationS3
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3"></a>

```python
s3: SignerSigningJobDestinationS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobDestinationS3 <a name="SignerSigningJobDestinationS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobDestinationS3(
  bucket: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}.

---

### SignerSigningJobRevocationRecord <a name="SignerSigningJobRevocationRecord" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobRevocationRecord()
```


### SignerSigningJobSignedObject <a name="SignerSigningJobSignedObject" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObject()
```


### SignerSigningJobSignedObjectS3 <a name="SignerSigningJobSignedObjectS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObjectS3()
```


### SignerSigningJobSource <a name="SignerSigningJobSource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSource(
  s3: SignerSigningJobSourceS3
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3"></a>

```python
s3: SignerSigningJobSourceS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobSourceS3 <a name="SignerSigningJobSourceS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSourceS3(
  bucket: str,
  key: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningJobDestinationOutputReference <a name="SignerSigningJobDestinationOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3">put_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3"></a>

```python
s3: SignerSigningJobDestinationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input"></a>

```python
s3_input: SignerSigningJobDestinationS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobDestination
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---


### SignerSigningJobDestinationS3OutputReference <a name="SignerSigningJobDestinationS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobDestinationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobDestinationS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---


### SignerSigningJobRevocationRecordList <a name="SignerSigningJobRevocationRecordList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobRevocationRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignerSigningJobRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SignerSigningJobRevocationRecordOutputReference <a name="SignerSigningJobRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobRevocationRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt">revoked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy">revoked_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `revoked_at`<sup>Required</sup> <a name="revoked_at" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt"></a>

```python
revoked_at: str
```

- *Type:* str

---

##### `revoked_by`<sup>Required</sup> <a name="revoked_by" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy"></a>

```python
revoked_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobRevocationRecord
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a>

---


### SignerSigningJobSignedObjectList <a name="SignerSigningJobSignedObjectList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignerSigningJobSignedObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SignerSigningJobSignedObjectOutputReference <a name="SignerSigningJobSignedObjectOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3"></a>

```python
s3: SignerSigningJobSignedObjectS3List
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobSignedObject
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a>

---


### SignerSigningJobSignedObjectS3List <a name="SignerSigningJobSignedObjectS3List" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObjectS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignerSigningJobSignedObjectS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SignerSigningJobSignedObjectS3OutputReference <a name="SignerSigningJobSignedObjectS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSignedObjectS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobSignedObjectS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a>

---


### SignerSigningJobSourceOutputReference <a name="SignerSigningJobSourceOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3">put_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str,
  key: str,
  version: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3"></a>

```python
s3: SignerSigningJobSourceS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input"></a>

```python
s3_input: SignerSigningJobSourceS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobSource
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---


### SignerSigningJobSourceS3OutputReference <a name="SignerSigningJobSourceS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_job

signerSigningJob.SignerSigningJobSourceS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue"></a>

```python
internal_value: SignerSigningJobSourceS3
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---



