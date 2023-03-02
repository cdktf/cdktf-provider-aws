# `lbListenerRule` Submodule <a name="`lbListenerRule` Submodule" id="@cdktf/provider-aws.lbListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerRule <a name="LbListenerRule" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule aws_lb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRule(scope: Construct, id: string, config: LbListenerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction"></a>

```typescript
public putAction(value: IResolvable | LbListenerRuleAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition"></a>

```typescript
public putCondition(value: IResolvable | LbListenerRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

lbListenerRule.LbListenerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

lbListenerRule.LbListenerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

lbListenerRule.LbListenerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput">listenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action"></a>

```typescript
public readonly action: LbListenerRuleActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition"></a>

```typescript
public readonly condition: LbListenerRuleConditionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | LbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | LbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput"></a>

```typescript
public readonly listenerArnInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerRuleAction <a name="LbListenerRuleAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleAction: lbListenerRule.LbListenerRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#type LbListenerRule#type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#order LbListenerRule#order}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#type LbListenerRule#type}.

---

##### `authenticateCognito`<sup>Optional</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: LbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authenticate_cognito LbListenerRule#authenticate_cognito}

---

##### `authenticateOidc`<sup>Optional</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: LbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authenticate_oidc LbListenerRule#authenticate_oidc}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#fixed_response LbListenerRule#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward"></a>

```typescript
public readonly forward: LbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#forward LbListenerRule#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#order LbListenerRule#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect"></a>

```typescript
public readonly redirect: LbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#redirect LbListenerRule#redirect}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}.

---

### LbListenerRuleActionAuthenticateCognito <a name="LbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionAuthenticateCognito: lbListenerRule.LbListenerRuleActionAuthenticateCognito = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}.

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionAuthenticateOidc <a name="LbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionAuthenticateOidc: lbListenerRule.LbListenerRuleActionAuthenticateOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_id LbListenerRule#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_secret LbListenerRule#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#issuer LbListenerRule#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_id LbListenerRule#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_secret LbListenerRule#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#issuer LbListenerRule#issuer}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionFixedResponse <a name="LbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionFixedResponse: lbListenerRule.LbListenerRuleActionFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#content_type LbListenerRule#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody">messageBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#message_body LbListenerRule#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#content_type LbListenerRule#content_type}.

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#message_body LbListenerRule#message_body}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}.

---

### LbListenerRuleActionForward <a name="LbListenerRuleActionForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionForward: lbListenerRule.LbListenerRuleActionForward = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup">targetGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | stickiness block. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup"></a>

```typescript
public readonly targetGroup: IResolvable | LbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group LbListenerRule#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness"></a>

```typescript
public readonly stickiness: LbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#stickiness LbListenerRule#stickiness}

---

### LbListenerRuleActionForwardStickiness <a name="LbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionForwardStickiness: lbListenerRule.LbListenerRuleActionForwardStickiness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#duration LbListenerRule#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#enabled LbListenerRule#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#duration LbListenerRule#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#enabled LbListenerRule#enabled}.

---

### LbListenerRuleActionForwardTargetGroup <a name="LbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionForwardTargetGroup: lbListenerRule.LbListenerRuleActionForwardTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#arn LbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#weight LbListenerRule#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#arn LbListenerRule#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#weight LbListenerRule#weight}.

---

### LbListenerRuleActionRedirect <a name="LbListenerRuleActionRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleActionRedirect: lbListenerRule.LbListenerRuleActionRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host LbListenerRule#host}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path LbListenerRule#path}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#port LbListenerRule#port}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#protocol LbListenerRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query LbListenerRule#query}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host LbListenerRule#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path LbListenerRule#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#port LbListenerRule#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#protocol LbListenerRule#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query LbListenerRule#query}.

---

### LbListenerRuleCondition <a name="LbListenerRuleCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleCondition: lbListenerRule.LbListenerRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader">hostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | host_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader">httpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | http_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod">httpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | http_request_method block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern">pathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | path_pattern block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString">queryString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]</code> | query_string block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp">sourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | source_ip block. |

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader"></a>

```typescript
public readonly hostHeader: LbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

host_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host_header LbListenerRule#host_header}

---

##### `httpHeader`<sup>Optional</sup> <a name="httpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader"></a>

```typescript
public readonly httpHeader: LbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

http_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header LbListenerRule#http_header}

---

##### `httpRequestMethod`<sup>Optional</sup> <a name="httpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod"></a>

```typescript
public readonly httpRequestMethod: LbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

http_request_method block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_request_method LbListenerRule#http_request_method}

---

##### `pathPattern`<sup>Optional</sup> <a name="pathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern"></a>

```typescript
public readonly pathPattern: LbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

path_pattern block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path_pattern LbListenerRule#path_pattern}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString"></a>

```typescript
public readonly queryString: IResolvable | LbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query_string LbListenerRule#query_string}

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp"></a>

```typescript
public readonly sourceIp: LbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

source_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#source_ip LbListenerRule#source_ip}

---

### LbListenerRuleConditionHostHeader <a name="LbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionHostHeader: lbListenerRule.LbListenerRuleConditionHostHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpHeader <a name="LbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionHttpHeader: lbListenerRule.LbListenerRuleConditionHttpHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header_name LbListenerRule#http_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header_name LbListenerRule#http_header_name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpRequestMethod <a name="LbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionHttpRequestMethod: lbListenerRule.LbListenerRuleConditionHttpRequestMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionPathPattern <a name="LbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionPathPattern: lbListenerRule.LbListenerRuleConditionPathPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionQueryString <a name="LbListenerRuleConditionQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionQueryString: lbListenerRule.LbListenerRuleConditionQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#value LbListenerRule#value}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#key LbListenerRule#key}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#value LbListenerRule#value}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#key LbListenerRule#key}.

---

### LbListenerRuleConditionSourceIp <a name="LbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConditionSourceIp: lbListenerRule.LbListenerRuleConditionSourceIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConfig <a name="LbListenerRuleConfig" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

const lbListenerRuleConfig: lbListenerRule.LbListenerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn">listenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#listener_arn LbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#id LbListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#priority LbListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags LbListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags_all LbListenerRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action"></a>

```typescript
public readonly action: IResolvable | LbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#action LbListenerRule#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | LbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#condition LbListenerRule#condition}

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#listener_arn LbListenerRule#listener_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#id LbListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#priority LbListenerRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags LbListenerRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags_all LbListenerRule#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerRuleActionAuthenticateCognitoOutputReference <a name="LbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```typescript
public readonly userPoolClientIdInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---


### LbListenerRuleActionAuthenticateOidcOutputReference <a name="LbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---


### LbListenerRuleActionFixedResponseOutputReference <a name="LbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---


### LbListenerRuleActionForwardOutputReference <a name="LbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness">resetStickiness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness"></a>

```typescript
public putStickiness(value: LbListenerRuleActionForwardStickiness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```typescript
public putTargetGroup(value: IResolvable | LbListenerRuleActionForwardTargetGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]

---

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness"></a>

```typescript
public resetStickiness(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```typescript
public readonly stickiness: LbListenerRuleActionForwardStickinessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: LbListenerRuleActionForwardTargetGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a>

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput"></a>

```typescript
public readonly stickinessInput: LbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: IResolvable | LbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---


### LbListenerRuleActionForwardStickinessOutputReference <a name="LbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---


### LbListenerRuleActionForwardTargetGroupList <a name="LbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionForwardTargetGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get"></a>

```typescript
public get(index: number): LbListenerRuleActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a>[]

---


### LbListenerRuleActionForwardTargetGroupOutputReference <a name="LbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionForwardTargetGroup | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup">LbListenerRuleActionForwardTargetGroup</a> | cdktf.IResolvable

---


### LbListenerRuleActionList <a name="LbListenerRuleActionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get"></a>

```typescript
public get(index: number): LbListenerRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a>[]

---


### LbListenerRuleActionOutputReference <a name="LbListenerRuleActionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito">putAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc">putAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito">resetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc">resetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognito` <a name="putAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito"></a>

```typescript
public putAuthenticateCognito(value: LbListenerRuleActionAuthenticateCognito): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `putAuthenticateOidc` <a name="putAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc"></a>

```typescript
public putAuthenticateOidc(value: LbListenerRuleActionAuthenticateOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: LbListenerRuleActionFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward"></a>

```typescript
public putForward(value: LbListenerRuleActionForward): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: LbListenerRuleActionRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `resetAuthenticateCognito` <a name="resetAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito"></a>

```typescript
public resetAuthenticateCognito(): void
```

##### `resetAuthenticateOidc` <a name="resetAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc"></a>

```typescript
public resetAuthenticateOidc(): void
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward"></a>

```typescript
public resetForward(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput">authenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput">authenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: LbListenerRuleActionAuthenticateCognitoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: LbListenerRuleActionAuthenticateOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LbListenerRuleActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward"></a>

```typescript
public readonly forward: LbListenerRuleActionForwardOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect"></a>

```typescript
public readonly redirect: LbListenerRuleActionRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a>

---

##### `authenticateCognitoInput`<sup>Optional</sup> <a name="authenticateCognitoInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput"></a>

```typescript
public readonly authenticateCognitoInput: LbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `authenticateOidcInput`<sup>Optional</sup> <a name="authenticateOidcInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput"></a>

```typescript
public readonly authenticateOidcInput: LbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: LbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: LbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: LbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction">LbListenerRuleAction</a> | cdktf.IResolvable

---


### LbListenerRuleActionRedirectOutputReference <a name="LbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleActionRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---


### LbListenerRuleConditionHostHeaderOutputReference <a name="LbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---


### LbListenerRuleConditionHttpHeaderOutputReference <a name="LbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput"></a>

```typescript
public readonly httpHeaderNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---


### LbListenerRuleConditionHttpRequestMethodOutputReference <a name="LbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---


### LbListenerRuleConditionList <a name="LbListenerRuleConditionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get"></a>

```typescript
public get(index: number): LbListenerRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a>[]

---


### LbListenerRuleConditionOutputReference <a name="LbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader">putHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader">putHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod">putHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern">putPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp">putSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader">resetHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod">resetHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern">resetPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostHeader` <a name="putHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader"></a>

```typescript
public putHostHeader(value: LbListenerRuleConditionHostHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `putHttpHeader` <a name="putHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader"></a>

```typescript
public putHttpHeader(value: LbListenerRuleConditionHttpHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `putHttpRequestMethod` <a name="putHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod"></a>

```typescript
public putHttpRequestMethod(value: LbListenerRuleConditionHttpRequestMethod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `putPathPattern` <a name="putPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern"></a>

```typescript
public putPathPattern(value: LbListenerRuleConditionPathPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: IResolvable | LbListenerRuleConditionQueryString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]

---

##### `putSourceIp` <a name="putSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp"></a>

```typescript
public putSourceIp(value: LbListenerRuleConditionSourceIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader"></a>

```typescript
public resetHostHeader(): void
```

##### `resetHttpHeader` <a name="resetHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader"></a>

```typescript
public resetHttpHeader(): void
```

##### `resetHttpRequestMethod` <a name="resetHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod"></a>

```typescript
public resetHttpRequestMethod(): void
```

##### `resetPathPattern` <a name="resetPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern"></a>

```typescript
public resetPathPattern(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader">hostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader">httpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod">httpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern">pathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp">sourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput">httpHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput">httpRequestMethodInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput">pathPatternInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: LbListenerRuleConditionHostHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `httpHeader`<sup>Required</sup> <a name="httpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader"></a>

```typescript
public readonly httpHeader: LbListenerRuleConditionHttpHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `httpRequestMethod`<sup>Required</sup> <a name="httpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```typescript
public readonly httpRequestMethod: LbListenerRuleConditionHttpRequestMethodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern"></a>

```typescript
public readonly pathPattern: LbListenerRuleConditionPathPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: LbListenerRuleConditionQueryStringList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a>

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: LbListenerRuleConditionSourceIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a>

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput"></a>

```typescript
public readonly hostHeaderInput: LbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `httpHeaderInput`<sup>Optional</sup> <a name="httpHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput"></a>

```typescript
public readonly httpHeaderInput: LbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `httpRequestMethodInput`<sup>Optional</sup> <a name="httpRequestMethodInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput"></a>

```typescript
public readonly httpRequestMethodInput: LbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput"></a>

```typescript
public readonly pathPatternInput: LbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: IResolvable | LbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: LbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleCondition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition">LbListenerRuleCondition</a> | cdktf.IResolvable

---


### LbListenerRuleConditionPathPatternOutputReference <a name="LbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionPathPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---


### LbListenerRuleConditionQueryStringList <a name="LbListenerRuleConditionQueryStringList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get"></a>

```typescript
public get(index: number): LbListenerRuleConditionQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a>[]

---


### LbListenerRuleConditionQueryStringOutputReference <a name="LbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionQueryString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString">LbListenerRuleConditionQueryString</a> | cdktf.IResolvable

---


### LbListenerRuleConditionSourceIpOutputReference <a name="LbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```typescript
import { lbListenerRule } from '@cdktf/provider-aws'

new lbListenerRule.LbListenerRuleConditionSourceIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---



