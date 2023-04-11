# `emrserverlessApplication` Submodule <a name="`emrserverlessApplication` Submodule" id="@cdktf/provider-aws.emrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrserverlessApplication <a name="EmrserverlessApplication" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application aws_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplication(scope Construct, id *string, config EmrserverlessApplicationConfig) EmrserverlessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig">EmrserverlessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig">EmrserverlessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration">PutAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration">PutAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration">PutImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity">PutInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity">PutMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration">ResetAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration">ResetAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration">ResetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity">ResetInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity">ResetMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoStartConfiguration` <a name="PutAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration"></a>

```go
func PutAutoStartConfiguration(value EmrserverlessApplicationAutoStartConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `PutAutoStopConfiguration` <a name="PutAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration"></a>

```go
func PutAutoStopConfiguration(value EmrserverlessApplicationAutoStopConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `PutImageConfiguration` <a name="PutImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration"></a>

```go
func PutImageConfiguration(value EmrserverlessApplicationImageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `PutInitialCapacity` <a name="PutInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity"></a>

```go
func PutInitialCapacity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaximumCapacity` <a name="PutMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity"></a>

```go
func PutMaximumCapacity(value EmrserverlessApplicationMaximumCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value EmrserverlessApplicationNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetAutoStartConfiguration` <a name="ResetAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration"></a>

```go
func ResetAutoStartConfiguration()
```

##### `ResetAutoStopConfiguration` <a name="ResetAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration"></a>

```go
func ResetAutoStopConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetImageConfiguration` <a name="ResetImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration"></a>

```go
func ResetImageConfiguration()
```

##### `ResetInitialCapacity` <a name="ResetInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity"></a>

```go
func ResetInitialCapacity()
```

##### `ResetMaximumCapacity` <a name="ResetMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity"></a>

```go
func ResetMaximumCapacity()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.EmrserverlessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.EmrserverlessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.EmrserverlessApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration">AutoStartConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration">AutoStopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity">InitialCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity">MaximumCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput">AutoStartConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput">AutoStopConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput">ImageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput">InitialCapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput">MaximumCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoStartConfiguration`<sup>Required</sup> <a name="AutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration"></a>

```go
func AutoStartConfiguration() EmrserverlessApplicationAutoStartConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `AutoStopConfiguration`<sup>Required</sup> <a name="AutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration"></a>

```go
func AutoStopConfiguration() EmrserverlessApplicationAutoStopConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration"></a>

```go
func ImageConfiguration() EmrserverlessApplicationImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `InitialCapacity`<sup>Required</sup> <a name="InitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity"></a>

```go
func InitialCapacity() EmrserverlessApplicationInitialCapacityList
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a>

---

##### `MaximumCapacity`<sup>Required</sup> <a name="MaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity"></a>

```go
func MaximumCapacity() EmrserverlessApplicationMaximumCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration"></a>

```go
func NetworkConfiguration() EmrserverlessApplicationNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `AutoStartConfigurationInput`<sup>Optional</sup> <a name="AutoStartConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput"></a>

```go
func AutoStartConfigurationInput() EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `AutoStopConfigurationInput`<sup>Optional</sup> <a name="AutoStopConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput"></a>

```go
func AutoStopConfigurationInput() EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageConfigurationInput`<sup>Optional</sup> <a name="ImageConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput"></a>

```go
func ImageConfigurationInput() EmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `InitialCapacityInput`<sup>Optional</sup> <a name="InitialCapacityInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput"></a>

```go
func InitialCapacityInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumCapacityInput`<sup>Optional</sup> <a name="MaximumCapacityInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput"></a>

```go
func MaximumCapacityInput() EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput"></a>

```go
func ReleaseLabelInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel"></a>

```go
func ReleaseLabel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrserverlessApplicationAutoStartConfiguration <a name="EmrserverlessApplicationAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationAutoStartConfiguration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

### EmrserverlessApplicationAutoStopConfiguration <a name="EmrserverlessApplicationAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationAutoStopConfiguration {
	Enabled: interface{},
	IdleTimeoutMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes">IdleTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `IdleTimeoutMinutes`<sup>Optional</sup> <a name="IdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes"></a>

```go
IdleTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}.

---

### EmrserverlessApplicationConfig <a name="EmrserverlessApplicationConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ReleaseLabel: *string,
	Type: *string,
	Architecture: *string,
	AutoStartConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration,
	AutoStopConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration,
	Id: *string,
	ImageConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration,
	InitialCapacity: interface{},
	MaximumCapacity: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity,
	NetworkConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture">Architecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration">AutoStartConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | auto_start_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration">AutoStopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | auto_stop_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | image_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity">InitialCapacity</a></code> | <code>interface{}</code> | initial_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity">MaximumCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | maximum_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}.

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel"></a>

```go
ReleaseLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}.

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}.

---

##### `AutoStartConfiguration`<sup>Optional</sup> <a name="AutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration"></a>

```go
AutoStartConfiguration EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

auto_start_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `AutoStopConfiguration`<sup>Optional</sup> <a name="AutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration"></a>

```go
AutoStopConfiguration EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

auto_stop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageConfiguration`<sup>Optional</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration"></a>

```go
ImageConfiguration EmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

image_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `InitialCapacity`<sup>Optional</sup> <a name="InitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity"></a>

```go
InitialCapacity interface{}
```

- *Type:* interface{}

initial_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `MaximumCapacity`<sup>Optional</sup> <a name="MaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity"></a>

```go
MaximumCapacity EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

maximum_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}.

---

### EmrserverlessApplicationImageConfiguration <a name="EmrserverlessApplicationImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationImageConfiguration {
	ImageUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri">ImageUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#image_uri EmrserverlessApplication#image_uri}. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#image_uri EmrserverlessApplication#image_uri}.

---

### EmrserverlessApplicationInitialCapacity <a name="EmrserverlessApplicationInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationInitialCapacity {
	InitialCapacityType: *string,
	InitialCapacityConfig: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType">InitialCapacityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig">InitialCapacityConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | initial_capacity_config block. |

---

##### `InitialCapacityType`<sup>Required</sup> <a name="InitialCapacityType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType"></a>

```go
InitialCapacityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}.

---

##### `InitialCapacityConfig`<sup>Optional</sup> <a name="InitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig"></a>

```go
InitialCapacityConfig EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

initial_capacity_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfig <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig {
	WorkerCount: *f64,
	WorkerConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount"></a>

```go
WorkerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}.

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration"></a>

```go
WorkerConfiguration EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
	Cpu: *string,
	Memory: *string,
	Disk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk">Disk</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk"></a>

```go
Disk *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationMaximumCapacity <a name="EmrserverlessApplicationMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationMaximumCapacity {
	Cpu: *string,
	Memory: *string,
	Disk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk">Disk</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk"></a>

```go
Disk *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationNetworkConfiguration <a name="EmrserverlessApplicationNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

&emrserverlessapplication.EmrserverlessApplicationNetworkConfiguration {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrserverlessApplicationAutoStartConfigurationOutputReference <a name="EmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationAutoStartConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationAutoStartConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---


### EmrserverlessApplicationAutoStopConfigurationOutputReference <a name="EmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationAutoStopConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationAutoStopConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes">ResetIdleTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIdleTimeoutMinutes` <a name="ResetIdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes"></a>

```go
func ResetIdleTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput">IdleTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">IdleTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdleTimeoutMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutMinutesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput"></a>

```go
func IdleTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdleTimeoutMinutes`<sup>Required</sup> <a name="IdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```go
func IdleTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---


### EmrserverlessApplicationImageConfigurationOutputReference <a name="EmrserverlessApplicationImageConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationImageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationImageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration"></a>

```go
func PutWorkerConfiguration(value EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration"></a>

```go
func ResetWorkerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration"></a>

```go
func WorkerConfiguration() EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a>

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput"></a>

```go
func WorkerConfigurationInput() EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput"></a>

```go
func WorkerCountInput() *f64
```

- *Type:* *f64

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk"></a>

```go
func ResetDisk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput">DiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput"></a>

```go
func DiskInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityList <a name="EmrserverlessApplicationInitialCapacityList" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationInitialCapacityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrserverlessApplicationInitialCapacityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get"></a>

```go
func Get(index *f64) EmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrserverlessApplicationInitialCapacityOutputReference <a name="EmrserverlessApplicationInitialCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationInitialCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrserverlessApplicationInitialCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig">PutInitialCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig">ResetInitialCapacityConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialCapacityConfig` <a name="PutInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig"></a>

```go
func PutInitialCapacityConfig(value EmrserverlessApplicationInitialCapacityInitialCapacityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---

##### `ResetInitialCapacityConfig` <a name="ResetInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig"></a>

```go
func ResetInitialCapacityConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig">InitialCapacityConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput">InitialCapacityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput">InitialCapacityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType">InitialCapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialCapacityConfig`<sup>Required</sup> <a name="InitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig"></a>

```go
func InitialCapacityConfig() EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a>

---

##### `InitialCapacityConfigInput`<sup>Optional</sup> <a name="InitialCapacityConfigInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput"></a>

```go
func InitialCapacityConfigInput() EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---

##### `InitialCapacityTypeInput`<sup>Optional</sup> <a name="InitialCapacityTypeInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput"></a>

```go
func InitialCapacityTypeInput() *string
```

- *Type:* *string

---

##### `InitialCapacityType`<sup>Required</sup> <a name="InitialCapacityType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType"></a>

```go
func InitialCapacityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrserverlessApplicationMaximumCapacityOutputReference <a name="EmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationMaximumCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationMaximumCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk"></a>

```go
func ResetDisk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput">DiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput"></a>

```go
func DiskInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---


### EmrserverlessApplicationNetworkConfigurationOutputReference <a name="EmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrserverlessapplication"

emrserverlessapplication.NewEmrserverlessApplicationNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrserverlessApplicationNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---



