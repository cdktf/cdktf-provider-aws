# `redshiftserverlessEndpointAccess` Submodule <a name="`redshiftserverlessEndpointAccess` Submodule" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessEndpointAccess <a name="RedshiftserverlessEndpointAccess" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access aws_redshiftserverless_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_name: str,
  subnet_ids: typing.List[str],
  workgroup_name: str,
  id: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}.

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_endpoint`<sup>Required</sup> <a name="vpc_endpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint"></a>

```python
vpc_endpoint: RedshiftserverlessEndpointAccessVpcEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a>

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessEndpointAccessConfig <a name="RedshiftserverlessEndpointAccessConfig" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_name: str,
  subnet_ids: typing.List[str],
  workgroup_name: str,
  id: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}.

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}.

---

### RedshiftserverlessEndpointAccessVpcEndpoint <a name="RedshiftserverlessEndpointAccessVpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint()
```


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface()
```


## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessEndpointAccessVpcEndpointList <a name="RedshiftserverlessEndpointAccessVpcEndpointList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessEndpointAccessVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a>

---


### RedshiftserverlessEndpointAccessVpcEndpointOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_endpoint_access

redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface"></a>

```python
network_interface: RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a>

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessEndpointAccessVpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a>

---



