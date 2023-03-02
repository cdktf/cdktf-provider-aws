# `gameliftGameServerGroup` Submodule <a name="`gameliftGameServerGroup` Submodule" id="@cdktf/provider-aws.gameliftGameServerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameServerGroup <a name="GameliftGameServerGroup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group aws_gamelift_game_server_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroup(scope: Construct, id: string, config: GameliftGameServerGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy">putAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition">putInstanceDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy">resetAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy">resetBalancingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy">resetGameServerProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets">resetVpcSubnets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoScalingPolicy` <a name="putAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy"></a>

```typescript
public putAutoScalingPolicy(value: GameliftGameServerGroupAutoScalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `putInstanceDefinition` <a name="putInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition"></a>

```typescript
public putInstanceDefinition(value: IResolvable | GameliftGameServerGroupInstanceDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: GameliftGameServerGroupLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GameliftGameServerGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

---

##### `resetAutoScalingPolicy` <a name="resetAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy"></a>

```typescript
public resetAutoScalingPolicy(): void
```

##### `resetBalancingStrategy` <a name="resetBalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy"></a>

```typescript
public resetBalancingStrategy(): void
```

##### `resetGameServerProtectionPolicy` <a name="resetGameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy"></a>

```typescript
public resetGameServerProtectionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcSubnets` <a name="resetVpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets"></a>

```typescript
public resetVpcSubnets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

gameliftGameServerGroup.GameliftGameServerGroup.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn">autoScalingGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy">autoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition">instanceDefinition</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput">autoScalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput">balancingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput">gameServerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput">gameServerProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput">instanceDefinitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput">vpcSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy">balancingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName">gameServerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy">gameServerProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets">vpcSubnets</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoScalingGroupArn`<sup>Required</sup> <a name="autoScalingGroupArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn"></a>

```typescript
public readonly autoScalingGroupArn: string;
```

- *Type:* string

---

##### `autoScalingPolicy`<sup>Required</sup> <a name="autoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy"></a>

```typescript
public readonly autoScalingPolicy: GameliftGameServerGroupAutoScalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a>

---

##### `instanceDefinition`<sup>Required</sup> <a name="instanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition"></a>

```typescript
public readonly instanceDefinition: GameliftGameServerGroupInstanceDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: GameliftGameServerGroupLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GameliftGameServerGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a>

---

##### `autoScalingPolicyInput`<sup>Optional</sup> <a name="autoScalingPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput"></a>

```typescript
public readonly autoScalingPolicyInput: GameliftGameServerGroupAutoScalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `balancingStrategyInput`<sup>Optional</sup> <a name="balancingStrategyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput"></a>

```typescript
public readonly balancingStrategyInput: string;
```

- *Type:* string

---

##### `gameServerGroupNameInput`<sup>Optional</sup> <a name="gameServerGroupNameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput"></a>

```typescript
public readonly gameServerGroupNameInput: string;
```

- *Type:* string

---

##### `gameServerProtectionPolicyInput`<sup>Optional</sup> <a name="gameServerProtectionPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput"></a>

```typescript
public readonly gameServerProtectionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceDefinitionInput`<sup>Optional</sup> <a name="instanceDefinitionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput"></a>

```typescript
public readonly instanceDefinitionInput: IResolvable | GameliftGameServerGroupInstanceDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: GameliftGameServerGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GameliftGameServerGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> | cdktf.IResolvable

---

##### `vpcSubnetsInput`<sup>Optional</sup> <a name="vpcSubnetsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput"></a>

```typescript
public readonly vpcSubnetsInput: string[];
```

- *Type:* string[]

---

##### `balancingStrategy`<sup>Required</sup> <a name="balancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy"></a>

```typescript
public readonly balancingStrategy: string;
```

- *Type:* string

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName"></a>

```typescript
public readonly gameServerGroupName: string;
```

- *Type:* string

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="gameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy"></a>

```typescript
public readonly gameServerProtectionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSubnets`<sup>Required</sup> <a name="vpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameServerGroupAutoScalingPolicy <a name="GameliftGameServerGroupAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupAutoScalingPolicy: gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}. |

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration: gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

### GameliftGameServerGroupConfig <a name="GameliftGameServerGroupConfig" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupConfig: gameliftGameServerGroup.GameliftGameServerGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName">gameServerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition">instanceDefinition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]</code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy">autoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy">balancingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy">gameServerProtectionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets">vpcSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName"></a>

```typescript
public readonly gameServerGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `instanceDefinition`<sup>Required</sup> <a name="instanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition"></a>

```typescript
public readonly instanceDefinition: IResolvable | GameliftGameServerGroupInstanceDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: GameliftGameServerGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `autoScalingPolicy`<sup>Optional</sup> <a name="autoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy"></a>

```typescript
public readonly autoScalingPolicy: GameliftGameServerGroupAutoScalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `balancingStrategy`<sup>Optional</sup> <a name="balancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy"></a>

```typescript
public readonly balancingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="gameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy"></a>

```typescript
public readonly gameServerProtectionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GameliftGameServerGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

### GameliftGameServerGroupInstanceDefinition <a name="GameliftGameServerGroupInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupInstanceDefinition: gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}.

---

### GameliftGameServerGroupLaunchTemplate <a name="GameliftGameServerGroupLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupLaunchTemplate: gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

### GameliftGameServerGroupTimeouts <a name="GameliftGameServerGroupTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

const gameliftGameServerGroupTimeouts: gameliftGameServerGroup.GameliftGameServerGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameServerGroupAutoScalingPolicyOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration">putTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingConfiguration` <a name="putTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration"></a>

```typescript
public putTargetTrackingConfiguration(value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup"></a>

```typescript
public resetEstimatedInstanceWarmup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput">targetTrackingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput"></a>

```typescript
public readonly estimatedInstanceWarmupInput: number;
```

- *Type:* number

---

##### `targetTrackingConfigurationInput`<sup>Optional</sup> <a name="targetTrackingConfigurationInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput"></a>

```typescript
public readonly targetTrackingConfigurationInput: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameServerGroupAutoScalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---


### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---


### GameliftGameServerGroupInstanceDefinitionList <a name="GameliftGameServerGroupInstanceDefinitionList" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get"></a>

```typescript
public get(index: number): GameliftGameServerGroupInstanceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameServerGroupInstanceDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>[]

---


### GameliftGameServerGroupInstanceDefinitionOutputReference <a name="GameliftGameServerGroupInstanceDefinitionOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameServerGroupInstanceDefinition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a> | cdktf.IResolvable

---


### GameliftGameServerGroupLaunchTemplateOutputReference <a name="GameliftGameServerGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameServerGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---


### GameliftGameServerGroupTimeoutsOutputReference <a name="GameliftGameServerGroupTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { gameliftGameServerGroup } from '@cdktf/provider-aws'

new gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameServerGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a> | cdktf.IResolvable

---



