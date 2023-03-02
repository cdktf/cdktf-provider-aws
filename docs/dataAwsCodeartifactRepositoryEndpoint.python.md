# `dataAwsCodeartifactRepositoryEndpoint` Submodule <a name="`dataAwsCodeartifactRepositoryEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactRepositoryEndpoint <a name="DataAwsCodeartifactRepositoryEndpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeartifact_repository_endpoint

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  format: str,
  repository: str,
  domain_owner: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domainOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner">reset_domain_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_domain_owner` <a name="reset_domain_owner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner"></a>

```python
def reset_domain_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeartifact_repository_endpoint

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeartifact_repository_endpoint

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeartifact_repository_endpoint

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint">repository_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput">domain_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `repository_endpoint`<sup>Required</sup> <a name="repository_endpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint"></a>

```python
repository_endpoint: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_owner_input`<sup>Optional</sup> <a name="domain_owner_input" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput"></a>

```python
domain_owner_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactRepositoryEndpointConfig <a name="DataAwsCodeartifactRepositoryEndpointConfig" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeartifact_repository_endpoint

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  format: str,
  repository: str,
  domain_owner: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



