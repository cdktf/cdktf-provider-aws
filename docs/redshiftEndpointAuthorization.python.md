# `redshiftEndpointAuthorization` Submodule <a name="`redshiftEndpointAuthorization` Submodule" id="@cdktf/provider-aws.redshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAuthorization <a name="RedshiftEndpointAuthorization" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization aws_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_endpoint_authorization

redshiftEndpointAuthorization.RedshiftEndpointAuthorization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account: str,
  cluster_identifier: str,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  vpc_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.account">account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.account"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpc_ids`<sup>Optional</sup> <a name="vpc_ids" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.vpcIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds">reset_vpc_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_vpc_ids` <a name="reset_vpc_ids" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds"></a>

```python
def reset_vpc_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_endpoint_authorization

redshiftEndpointAuthorization.RedshiftEndpointAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_endpoint_authorization

redshiftEndpointAuthorization.RedshiftEndpointAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_endpoint_authorization

redshiftEndpointAuthorization.RedshiftEndpointAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs">allowed_all_vpcs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount">endpoint_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput">vpc_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_all_vpcs`<sup>Required</sup> <a name="allowed_all_vpcs" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs"></a>

```python
allowed_all_vpcs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `endpoint_count`<sup>Required</sup> <a name="endpoint_count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount"></a>

```python
endpoint_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `vpc_ids_input`<sup>Optional</sup> <a name="vpc_ids_input" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput"></a>

```python
vpc_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vpc_ids`<sup>Required</sup> <a name="vpc_ids" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds"></a>

```python
vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAuthorizationConfig <a name="RedshiftEndpointAuthorizationConfig" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_endpoint_authorization

redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account: str,
  cluster_identifier: str,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  vpc_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account">account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account"></a>

```python
account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpc_ids`<sup>Optional</sup> <a name="vpc_ids" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds"></a>

```python
vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}.

---



