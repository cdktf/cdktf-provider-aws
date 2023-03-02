# `servicecatalogBudgetResourceAssociation` Submodule <a name="`servicecatalogBudgetResourceAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogBudgetResourceAssociation <a name="ServicecatalogBudgetResourceAssociation" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association aws_servicecatalog_budget_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  budget_name: str,
  resource_id: str,
  id: str = None,
  timeouts: ServicecatalogBudgetResourceAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.budgetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#timeouts ServicecatalogBudgetResourceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#create ServicecatalogBudgetResourceAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#delete ServicecatalogBudgetResourceAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#read ServicecatalogBudgetResourceAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference">ServicecatalogBudgetResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetNameInput">budget_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetName">budget_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeouts"></a>

```python
timeouts: ServicecatalogBudgetResourceAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference">ServicecatalogBudgetResourceAssociationTimeoutsOutputReference</a>

---

##### `budget_name_input`<sup>Optional</sup> <a name="budget_name_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetNameInput"></a>

```python
budget_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogBudgetResourceAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogBudgetResourceAssociationConfig <a name="ServicecatalogBudgetResourceAssociationConfig" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  budget_name: str,
  resource_id: str,
  id: str = None,
  timeouts: ServicecatalogBudgetResourceAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogBudgetResourceAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#timeouts ServicecatalogBudgetResourceAssociation#timeouts}

---

### ServicecatalogBudgetResourceAssociationTimeouts <a name="ServicecatalogBudgetResourceAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#create ServicecatalogBudgetResourceAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#delete ServicecatalogBudgetResourceAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#read ServicecatalogBudgetResourceAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#create ServicecatalogBudgetResourceAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#delete ServicecatalogBudgetResourceAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association#read ServicecatalogBudgetResourceAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogBudgetResourceAssociationTimeoutsOutputReference <a name="ServicecatalogBudgetResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_budget_resource_association

servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogBudgetResourceAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>, cdktf.IResolvable]

---



