# `kinesisanalyticsv2ApplicationSnapshot` Submodule <a name="`kinesisanalyticsv2ApplicationSnapshot` Submodule" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2ApplicationSnapshot <a name="Kinesisanalyticsv2ApplicationSnapshot" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

kinesisanalyticsv2applicationsnapshot.NewKinesisanalyticsv2ApplicationSnapshot(scope Construct, id *string, config Kinesisanalyticsv2ApplicationSnapshotConfig) Kinesisanalyticsv2ApplicationSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts"></a>

```go
func PutTimeouts(value Kinesisanalyticsv2ApplicationSnapshotTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

kinesisanalyticsv2applicationsnapshot.Kinesisanalyticsv2ApplicationSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

kinesisanalyticsv2applicationsnapshot.Kinesisanalyticsv2ApplicationSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

kinesisanalyticsv2applicationsnapshot.Kinesisanalyticsv2ApplicationSnapshot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId">ApplicationVersionId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp">SnapshotCreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId"></a>

```go
func ApplicationVersionId() *f64
```

- *Type:* *f64

---

##### `SnapshotCreationTimestamp`<sup>Required</sup> <a name="SnapshotCreationTimestamp" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp"></a>

```go
func SnapshotCreationTimestamp() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts"></a>

```go
func Timeouts() Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2ApplicationSnapshotConfig <a name="Kinesisanalyticsv2ApplicationSnapshotConfig" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

&kinesisanalyticsv2applicationsnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationName: *string,
	SnapshotName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts"></a>

```go
Timeouts Kinesisanalyticsv2ApplicationSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}

---

### Kinesisanalyticsv2ApplicationSnapshotTimeouts <a name="Kinesisanalyticsv2ApplicationSnapshotTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

&kinesisanalyticsv2applicationsnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference <a name="Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisanalyticsv2applicationsnapshot"

kinesisanalyticsv2applicationsnapshot.NewKinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



