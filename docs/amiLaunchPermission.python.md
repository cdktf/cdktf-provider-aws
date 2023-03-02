# `amiLaunchPermission` Submodule <a name="`amiLaunchPermission` Submodule" id="@cdktf/provider-aws.amiLaunchPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiLaunchPermission <a name="AmiLaunchPermission" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission aws_ami_launch_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami_launch_permission

amiLaunchPermission.AmiLaunchPermission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_id: str,
  account_id: str = None,
  group: str = None,
  id: str = None,
  organizational_unit_arn: str = None,
  organization_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationalUnitArn">organizational_unit_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationArn">organization_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizational_unit_arn`<sup>Optional</sup> <a name="organizational_unit_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationalUnitArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `organization_arn`<sup>Optional</sup> <a name="organization_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn">reset_organizational_unit_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn">reset_organization_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organizational_unit_arn` <a name="reset_organizational_unit_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn"></a>

```python
def reset_organizational_unit_arn() -> None
```

##### `reset_organization_arn` <a name="reset_organization_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn"></a>

```python
def reset_organization_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ami_launch_permission

amiLaunchPermission.AmiLaunchPermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ami_launch_permission

amiLaunchPermission.AmiLaunchPermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ami_launch_permission

amiLaunchPermission.AmiLaunchPermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput">organizational_unit_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput">organization_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn">organizational_unit_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn">organization_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `organizational_unit_arn_input`<sup>Optional</sup> <a name="organizational_unit_arn_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput"></a>

```python
organizational_unit_arn_input: str
```

- *Type:* str

---

##### `organization_arn_input`<sup>Optional</sup> <a name="organization_arn_input" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput"></a>

```python
organization_arn_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `organizational_unit_arn`<sup>Required</sup> <a name="organizational_unit_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn"></a>

```python
organizational_unit_arn: str
```

- *Type:* str

---

##### `organization_arn`<sup>Required</sup> <a name="organization_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn"></a>

```python
organization_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmiLaunchPermissionConfig <a name="AmiLaunchPermissionConfig" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami_launch_permission

amiLaunchPermission.AmiLaunchPermissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_id: str,
  account_id: str = None,
  group: str = None,
  id: str = None,
  organizational_unit_arn: str = None,
  organization_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn">organizational_unit_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn">organization_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizational_unit_arn`<sup>Optional</sup> <a name="organizational_unit_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn"></a>

```python
organizational_unit_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `organization_arn`<sup>Optional</sup> <a name="organization_arn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn"></a>

```python
organization_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---



