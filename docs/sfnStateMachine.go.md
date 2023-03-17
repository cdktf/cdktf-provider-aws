# `sfnStateMachine` Submodule <a name="`sfnStateMachine` Submodule" id="@cdktf/provider-aws.sfnStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfnStateMachine <a name="SfnStateMachine" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine aws_sfn_state_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.NewSfnStateMachine(scope Construct, id *string, config SfnStateMachineConfig) SfnStateMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig">SfnStateMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig">SfnStateMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration">PutTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration">ResetTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value SfnStateMachineLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `PutTracingConfiguration` <a name="PutTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration"></a>

```go
func PutTracingConfiguration(value SfnStateMachineTracingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTracingConfiguration` <a name="ResetTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration"></a>

```go
func ResetTracingConfiguration()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.SfnStateMachine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.SfnStateMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.SfnStateMachine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput">TracingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() SfnStateMachineLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TracingConfiguration`<sup>Required</sup> <a name="TracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration"></a>

```go
func TracingConfiguration() SfnStateMachineTracingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a>

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TracingConfigurationInput`<sup>Optional</sup> <a name="TracingConfigurationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput"></a>

```go
func TracingConfigurationInput() SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SfnStateMachineConfig <a name="SfnStateMachineConfig" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

&sfnstatemachine.SfnStateMachineConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: *string,
	RoleArn: *string,
	Id: *string,
	LoggingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.sfnStateMachine.SfnStateMachineLoggingConfiguration,
	Name: *string,
	NamePrefix: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TracingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.sfnStateMachine.SfnStateMachineTracingConfiguration,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `TracingConfiguration`<sup>Optional</sup> <a name="TracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration"></a>

```go
TracingConfiguration SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineLoggingConfiguration <a name="SfnStateMachineLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

&sfnstatemachine.SfnStateMachineLoggingConfiguration {
	IncludeExecutionData: interface{},
	Level: *string,
	LogDestination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData">IncludeExecutionData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#level SfnStateMachine#level}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination">LogDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#log_destination SfnStateMachine#log_destination}. |

---

##### `IncludeExecutionData`<sup>Optional</sup> <a name="IncludeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```go
IncludeExecutionData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#level SfnStateMachine#level}.

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination"></a>

```go
LogDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#log_destination SfnStateMachine#log_destination}.

---

### SfnStateMachineTracingConfiguration <a name="SfnStateMachineTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

&sfnstatemachine.SfnStateMachineTracingConfiguration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#enabled SfnStateMachine#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#enabled SfnStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SfnStateMachineLoggingConfigurationOutputReference <a name="SfnStateMachineLoggingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.NewSfnStateMachineLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SfnStateMachineLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">ResetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination">ResetLogDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeExecutionData` <a name="ResetIncludeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```go
func ResetIncludeExecutionData()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination"></a>

```go
func ResetLogDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">IncludeExecutionDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput">LogDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">IncludeExecutionData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination">LogDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeExecutionDataInput`<sup>Optional</sup> <a name="IncludeExecutionDataInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```go
func IncludeExecutionDataInput() interface{}
```

- *Type:* interface{}

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```go
func LogDestinationInput() *string
```

- *Type:* *string

---

##### `IncludeExecutionData`<sup>Required</sup> <a name="IncludeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```go
func IncludeExecutionData() interface{}
```

- *Type:* interface{}

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination"></a>

```go
func LogDestination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---


### SfnStateMachineTracingConfigurationOutputReference <a name="SfnStateMachineTracingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnstatemachine"

sfnstatemachine.NewSfnStateMachineTracingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SfnStateMachineTracingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---



