# `cloudwatchEventPermission` Submodule <a name="`cloudwatchEventPermission` Submodule" id="@cdktf/provider-aws.cloudwatchEventPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventPermission <a name="CloudwatchEventPermission" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission aws_cloudwatch_event_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal: str,
  statement_id: str,
  action: str = None,
  condition: CloudwatchEventPermissionCondition = None,
  event_bus_name: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#principal CloudwatchEventPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#statement_id CloudwatchEventPermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#action CloudwatchEventPermission#action}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#event_bus_name CloudwatchEventPermission#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#id CloudwatchEventPermission#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.principal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#principal CloudwatchEventPermission#principal}.

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.statementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#statement_id CloudwatchEventPermission#statement_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#action CloudwatchEventPermission#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#condition CloudwatchEventPermission#condition}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.eventBusName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#event_bus_name CloudwatchEventPermission#event_bus_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#id CloudwatchEventPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetEventBusName">reset_event_bus_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.putCondition"></a>

```python
def put_condition(
  key: str,
  type: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.putCondition.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#key CloudwatchEventPermission#key}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.putCondition.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#type CloudwatchEventPermission#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.putCondition.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#value CloudwatchEventPermission#value}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_event_bus_name` <a name="reset_event_bus_name" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetEventBusName"></a>

```python
def reset_event_bus_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference">CloudwatchEventPermissionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.eventBusNameInput">event_bus_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.statementIdInput">statement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.statementId">statement_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.condition"></a>

```python
condition: CloudwatchEventPermissionConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference">CloudwatchEventPermissionConditionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.conditionInput"></a>

```python
condition_input: CloudwatchEventPermissionCondition
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a>

---

##### `event_bus_name_input`<sup>Optional</sup> <a name="event_bus_name_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.eventBusNameInput"></a>

```python
event_bus_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `statement_id_input`<sup>Optional</sup> <a name="statement_id_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.statementIdInput"></a>

```python
statement_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventPermissionCondition <a name="CloudwatchEventPermissionCondition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermissionCondition(
  key: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#key CloudwatchEventPermission#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#type CloudwatchEventPermission#type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#value CloudwatchEventPermission#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#key CloudwatchEventPermission#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#type CloudwatchEventPermission#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#value CloudwatchEventPermission#value}.

---

### CloudwatchEventPermissionConfig <a name="CloudwatchEventPermissionConfig" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal: str,
  statement_id: str,
  action: str = None,
  condition: CloudwatchEventPermissionCondition = None,
  event_bus_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#principal CloudwatchEventPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#statement_id CloudwatchEventPermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#action CloudwatchEventPermission#action}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#event_bus_name CloudwatchEventPermission#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#id CloudwatchEventPermission#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#principal CloudwatchEventPermission#principal}.

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#statement_id CloudwatchEventPermission#statement_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#action CloudwatchEventPermission#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.condition"></a>

```python
condition: CloudwatchEventPermissionCondition
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#condition CloudwatchEventPermission#condition}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#event_bus_name CloudwatchEventPermission#event_bus_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission#id CloudwatchEventPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventPermissionConditionOutputReference <a name="CloudwatchEventPermissionConditionOutputReference" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_permission

cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionConditionOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventPermissionCondition
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventPermission.CloudwatchEventPermissionCondition">CloudwatchEventPermissionCondition</a>

---



