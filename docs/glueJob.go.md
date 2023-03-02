# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktf/provider-aws.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktf/provider-aws.glueJob.GlueJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job aws_glue_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.NewGlueJob(scope Construct, id *string, config GlueJobConfig) GlueJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig">GlueJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobConfig">GlueJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putCommand">PutCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty">PutExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments">ResetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass">ResetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty">ResetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments">ResetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueJob.GlueJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCommand` <a name="PutCommand" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand"></a>

```go
func PutCommand(value GlueJobCommand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `PutExecutionProperty` <a name="PutExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty"></a>

```go
func PutExecutionProperty(value GlueJobExecutionProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty"></a>

```go
func PutNotificationProperty(value GlueJobNotificationProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-aws.glueJob.GlueJob.resetConnections"></a>

```go
func ResetConnections()
```

##### `ResetDefaultArguments` <a name="ResetDefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments"></a>

```go
func ResetDefaultArguments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueJob.GlueJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionClass` <a name="ResetExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass"></a>

```go
func ResetExecutionClass()
```

##### `ResetExecutionProperty` <a name="ResetExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty"></a>

```go
func ResetExecutionProperty()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion"></a>

```go
func ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueJob.GlueJob.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetNonOverridableArguments` <a name="ResetNonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments"></a>

```go
func ResetNonOverridableArguments()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty"></a>

```go
func ResetNotificationProperty()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueJob.GlueJob.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueJob.GlueJob.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.GlueJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.GlueJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.GlueJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.command">Command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.commandInput">CommandInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput">ConnectionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput">DefaultArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput">ExecutionClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput">ExecutionPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput">GlueVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput">NonOverridableArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connections">Connections</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments">DefaultArguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClass">ExecutionClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueJob.GlueJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueJob.GlueJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueJob.GlueJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueJob.GlueJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueJob.GlueJob.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-aws.glueJob.GlueJob.property.command"></a>

```go
func Command() GlueJobCommandOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `ExecutionProperty`<sup>Required</sup> <a name="ExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty"></a>

```go
func ExecutionProperty() GlueJobExecutionPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty"></a>

```go
func NotificationProperty() GlueJobNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.commandInput"></a>

```go
func CommandInput() GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput"></a>

```go
func ConnectionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultArgumentsInput`<sup>Optional</sup> <a name="DefaultArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```go
func DefaultArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionClassInput`<sup>Optional</sup> <a name="ExecutionClassInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput"></a>

```go
func ExecutionClassInput() *string
```

- *Type:* *string

---

##### `ExecutionPropertyInput`<sup>Optional</sup> <a name="ExecutionPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput"></a>

```go
func ExecutionPropertyInput() GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput"></a>

```go
func GlueVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonOverridableArgumentsInput`<sup>Optional</sup> <a name="NonOverridableArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```go
func NonOverridableArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput"></a>

```go
func NotificationPropertyInput() GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-aws.glueJob.GlueJob.property.connections"></a>

```go
func Connections() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultArguments`<sup>Required</sup> <a name="DefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments"></a>

```go
func DefaultArguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueJob.GlueJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionClass`<sup>Required</sup> <a name="ExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClass"></a>

```go
func ExecutionClass() *string
```

- *Type:* *string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion"></a>

```go
func GlueVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NonOverridableArguments`<sup>Required</sup> <a name="NonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments"></a>

```go
func NonOverridableArguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueJob.GlueJob.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktf/provider-aws.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobCommand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

&gluejob.GlueJobCommand {
	ScriptLocation: *string,
	Name: *string,
	PythonVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}. |

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation"></a>

```go
ScriptLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#script_location GlueJob#script_location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#python_version GlueJob#python_version}.

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktf/provider-aws.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

&gluejob.GlueJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Command: github.com/cdktf/cdktf-provider-aws-go/aws.glueJob.GlueJobCommand,
	Name: *string,
	RoleArn: *string,
	Connections: *[]*string,
	DefaultArguments: *map[string]*string,
	Description: *string,
	ExecutionClass: *string,
	ExecutionProperty: github.com/cdktf/cdktf-provider-aws-go/aws.glueJob.GlueJobExecutionProperty,
	GlueVersion: *string,
	Id: *string,
	MaxCapacity: *f64,
	MaxRetries: *f64,
	NonOverridableArguments: *map[string]*string,
	NotificationProperty: github.com/cdktf/cdktf-provider-aws-go/aws.glueJob.GlueJobNotificationProperty,
	NumberOfWorkers: *f64,
	SecurityConfiguration: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeout: *f64,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.command">Command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections">Connections</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments">DefaultArguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass">ExecutionClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.command"></a>

```go
Command GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#command GlueJob#command}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#name GlueJob#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#role_arn GlueJob#role_arn}.

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections"></a>

```go
Connections *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#connections GlueJob#connections}.

---

##### `DefaultArguments`<sup>Optional</sup> <a name="DefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments"></a>

```go
DefaultArguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#description GlueJob#description}.

---

##### `ExecutionClass`<sup>Optional</sup> <a name="ExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass"></a>

```go
ExecutionClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_class GlueJob#execution_class}.

---

##### `ExecutionProperty`<sup>Optional</sup> <a name="ExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty"></a>

```go
ExecutionProperty GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#execution_property GlueJob#execution_property}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion"></a>

```go
GlueVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#glue_version GlueJob#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_retries GlueJob#max_retries}.

---

##### `NonOverridableArguments`<sup>Optional</sup> <a name="NonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```go
NonOverridableArguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty"></a>

```go
NotificationProperty GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notification_property GlueJob#notification_property}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags GlueJob#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#tags_all GlueJob#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#timeout GlueJob#timeout}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#worker_type GlueJob#worker_type}.

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

&gluejob.GlueJobExecutionProperty {
	MaxConcurrentRuns: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}. |

---

##### `MaxConcurrentRuns`<sup>Optional</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```go
MaxConcurrentRuns *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}.

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

&gluejob.GlueJobNotificationProperty {
	NotifyDelayAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```go
NotifyDelayAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job#notify_delay_after GlueJob#notify_delay_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.NewGlueJobCommandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobCommandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```go
func ScriptLocationInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueJobCommand
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.NewGlueJobExecutionPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobExecutionPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">ResetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRuns` <a name="ResetMaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```go
func ResetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">MaxConcurrentRunsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunsInput`<sup>Optional</sup> <a name="MaxConcurrentRunsInput" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```go
func MaxConcurrentRunsInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentRuns`<sup>Required</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```go
func MaxConcurrentRuns() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluejob"

gluejob.NewGlueJobNotificationPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobNotificationPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```go
func ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```go
func NotifyDelayAfterInput() *f64
```

- *Type:* *f64

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```go
func NotifyDelayAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



