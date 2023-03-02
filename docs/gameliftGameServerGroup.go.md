# `gameliftGameServerGroup` Submodule <a name="`gameliftGameServerGroup` Submodule" id="@cdktf/provider-aws.gameliftGameServerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameServerGroup <a name="GameliftGameServerGroup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group aws_gamelift_game_server_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroup(scope Construct, id *string, config GameliftGameServerGroupConfig) GameliftGameServerGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy">PutAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition">PutInstanceDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy">ResetAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy">ResetBalancingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy">ResetGameServerProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets">ResetVpcSubnets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoScalingPolicy` <a name="PutAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy"></a>

```go
func PutAutoScalingPolicy(value GameliftGameServerGroupAutoScalingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `PutInstanceDefinition` <a name="PutInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition"></a>

```go
func PutInstanceDefinition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate"></a>

```go
func PutLaunchTemplate(value GameliftGameServerGroupLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts"></a>

```go
func PutTimeouts(value GameliftGameServerGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

---

##### `ResetAutoScalingPolicy` <a name="ResetAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy"></a>

```go
func ResetAutoScalingPolicy()
```

##### `ResetBalancingStrategy` <a name="ResetBalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy"></a>

```go
func ResetBalancingStrategy()
```

##### `ResetGameServerProtectionPolicy` <a name="ResetGameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy"></a>

```go
func ResetGameServerProtectionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSubnets` <a name="ResetVpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets"></a>

```go
func ResetVpcSubnets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.GameliftGameServerGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.GameliftGameServerGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.GameliftGameServerGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn">AutoScalingGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy">AutoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition">InstanceDefinition</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput">AutoScalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput">BalancingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput">GameServerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput">GameServerProtectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput">InstanceDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput">MaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput">MinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput">VpcSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy">BalancingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName">GameServerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy">GameServerProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets">VpcSubnets</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupArn`<sup>Required</sup> <a name="AutoScalingGroupArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn"></a>

```go
func AutoScalingGroupArn() *string
```

- *Type:* *string

---

##### `AutoScalingPolicy`<sup>Required</sup> <a name="AutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy"></a>

```go
func AutoScalingPolicy() GameliftGameServerGroupAutoScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a>

---

##### `InstanceDefinition`<sup>Required</sup> <a name="InstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition"></a>

```go
func InstanceDefinition() GameliftGameServerGroupInstanceDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate"></a>

```go
func LaunchTemplate() GameliftGameServerGroupLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts"></a>

```go
func Timeouts() GameliftGameServerGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a>

---

##### `AutoScalingPolicyInput`<sup>Optional</sup> <a name="AutoScalingPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput"></a>

```go
func AutoScalingPolicyInput() GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `BalancingStrategyInput`<sup>Optional</sup> <a name="BalancingStrategyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput"></a>

```go
func BalancingStrategyInput() *string
```

- *Type:* *string

---

##### `GameServerGroupNameInput`<sup>Optional</sup> <a name="GameServerGroupNameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput"></a>

```go
func GameServerGroupNameInput() *string
```

- *Type:* *string

---

##### `GameServerProtectionPolicyInput`<sup>Optional</sup> <a name="GameServerProtectionPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput"></a>

```go
func GameServerProtectionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceDefinitionInput`<sup>Optional</sup> <a name="InstanceDefinitionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput"></a>

```go
func InstanceDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput"></a>

```go
func LaunchTemplateInput() GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput"></a>

```go
func MaxSizeInput() *f64
```

- *Type:* *f64

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput"></a>

```go
func MinSizeInput() *f64
```

- *Type:* *f64

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSubnetsInput`<sup>Optional</sup> <a name="VpcSubnetsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput"></a>

```go
func VpcSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BalancingStrategy`<sup>Required</sup> <a name="BalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy"></a>

```go
func BalancingStrategy() *string
```

- *Type:* *string

---

##### `GameServerGroupName`<sup>Required</sup> <a name="GameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName"></a>

```go
func GameServerGroupName() *string
```

- *Type:* *string

---

##### `GameServerProtectionPolicy`<sup>Required</sup> <a name="GameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy"></a>

```go
func GameServerProtectionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSubnets`<sup>Required</sup> <a name="VpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets"></a>

```go
func VpcSubnets() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameServerGroupAutoScalingPolicy <a name="GameliftGameServerGroupAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupAutoScalingPolicy {
	TargetTrackingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration,
	EstimatedInstanceWarmup: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration">TargetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}. |

---

##### `TargetTrackingConfiguration`<sup>Required</sup> <a name="TargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

```go
TargetTrackingConfiguration GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

##### `EstimatedInstanceWarmup`<sup>Optional</sup> <a name="EstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

```go
EstimatedInstanceWarmup *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
	TargetValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue">TargetValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}. |

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```go
TargetValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

### GameliftGameServerGroupConfig <a name="GameliftGameServerGroupConfig" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GameServerGroupName: *string,
	InstanceDefinition: interface{},
	LaunchTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate,
	MaxSize: *f64,
	MinSize: *f64,
	RoleArn: *string,
	AutoScalingPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy,
	BalancingStrategy: *string,
	GameServerProtectionPolicy: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts,
	VpcSubnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName">GameServerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition">InstanceDefinition</a></code> | <code>interface{}</code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize">MaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize">MinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy">AutoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy">BalancingStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy">GameServerProtectionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets">VpcSubnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GameServerGroupName`<sup>Required</sup> <a name="GameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName"></a>

```go
GameServerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `InstanceDefinition`<sup>Required</sup> <a name="InstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition"></a>

```go
InstanceDefinition interface{}
```

- *Type:* interface{}

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate"></a>

```go
LaunchTemplate GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize"></a>

```go
MaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize"></a>

```go
MinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `AutoScalingPolicy`<sup>Optional</sup> <a name="AutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy"></a>

```go
AutoScalingPolicy GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `BalancingStrategy`<sup>Optional</sup> <a name="BalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy"></a>

```go
BalancingStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `GameServerProtectionPolicy`<sup>Optional</sup> <a name="GameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy"></a>

```go
GameServerProtectionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts"></a>

```go
Timeouts GameliftGameServerGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `VpcSubnets`<sup>Optional</sup> <a name="VpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets"></a>

```go
VpcSubnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

### GameliftGameServerGroupInstanceDefinition <a name="GameliftGameServerGroupInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupInstanceDefinition {
	InstanceType: *string,
	WeightedCapacity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity">WeightedCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity"></a>

```go
WeightedCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}.

---

### GameliftGameServerGroupLaunchTemplate <a name="GameliftGameServerGroupLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupLaunchTemplate {
	Id: *string,
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

### GameliftGameServerGroupTimeouts <a name="GameliftGameServerGroupTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

&gameliftgameservergroup.GameliftGameServerGroupTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameServerGroupAutoScalingPolicyOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupAutoScalingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameServerGroupAutoScalingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration">PutTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup">ResetEstimatedInstanceWarmup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingConfiguration` <a name="PutTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration"></a>

```go
func PutTargetTrackingConfiguration(value GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `ResetEstimatedInstanceWarmup` <a name="ResetEstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup"></a>

```go
func ResetEstimatedInstanceWarmup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration">TargetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput">EstimatedInstanceWarmupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput">TargetTrackingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetTrackingConfiguration`<sup>Required</sup> <a name="TargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration"></a>

```go
func TargetTrackingConfiguration() GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `EstimatedInstanceWarmupInput`<sup>Optional</sup> <a name="EstimatedInstanceWarmupInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput"></a>

```go
func EstimatedInstanceWarmupInput() *f64
```

- *Type:* *f64

---

##### `TargetTrackingConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingConfigurationInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput"></a>

```go
func TargetTrackingConfigurationInput() GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `EstimatedInstanceWarmup`<sup>Required</sup> <a name="EstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup"></a>

```go
func EstimatedInstanceWarmup() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---


### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```go
func TargetValueInput() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---


### GameliftGameServerGroupInstanceDefinitionList <a name="GameliftGameServerGroupInstanceDefinitionList" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupInstanceDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftGameServerGroupInstanceDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get"></a>

```go
func Get(index *f64) GameliftGameServerGroupInstanceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameServerGroupInstanceDefinitionOutputReference <a name="GameliftGameServerGroupInstanceDefinitionOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupInstanceDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftGameServerGroupInstanceDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity"></a>

```go
func ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput"></a>

```go
func WeightedCapacityInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameServerGroupLaunchTemplateOutputReference <a name="GameliftGameServerGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameServerGroupLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---


### GameliftGameServerGroupTimeoutsOutputReference <a name="GameliftGameServerGroupTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgameservergroup"

gameliftgameservergroup.NewGameliftGameServerGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameServerGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



