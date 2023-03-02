# `redshiftScheduledAction` Submodule <a name="`redshiftScheduledAction` Submodule" id="@cdktf/provider-aws.redshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftScheduledAction <a name="RedshiftScheduledAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action aws_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

new redshiftScheduledAction.RedshiftScheduledAction(scope: Construct, id: string, config: RedshiftScheduledActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction">putTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTargetAction` <a name="putTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction"></a>

```typescript
public putTargetAction(value: RedshiftScheduledActionTargetAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

redshiftScheduledAction.RedshiftScheduledAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput">iamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput">targetActionInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction"></a>

```typescript
public readonly targetAction: RedshiftScheduledActionTargetActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput"></a>

```typescript
public readonly iamRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput"></a>

```typescript
public readonly targetActionInput: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftScheduledActionConfig <a name="RedshiftScheduledActionConfig" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

const redshiftScheduledActionConfig: redshiftScheduledAction.RedshiftScheduledActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole">iamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | target_action block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction"></a>

```typescript
public readonly targetAction: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}.

---

### RedshiftScheduledActionTargetAction <a name="RedshiftScheduledActionTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

const redshiftScheduledActionTargetAction: redshiftScheduledAction.RedshiftScheduledActionTargetAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | pause_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | resize_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | resume_cluster block. |

---

##### `pauseCluster`<sup>Optional</sup> <a name="pauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster"></a>

```typescript
public readonly pauseCluster: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

pause_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}

---

##### `resizeCluster`<sup>Optional</sup> <a name="resizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster"></a>

```typescript
public readonly resizeCluster: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

resize_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}

---

##### `resumeCluster`<sup>Optional</sup> <a name="resumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster"></a>

```typescript
public readonly resumeCluster: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

resume_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}

---

### RedshiftScheduledActionTargetActionPauseCluster <a name="RedshiftScheduledActionTargetActionPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

const redshiftScheduledActionTargetActionPauseCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

### RedshiftScheduledActionTargetActionResizeCluster <a name="RedshiftScheduledActionTargetActionResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

const redshiftScheduledActionTargetActionResizeCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic">classic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}.

---

### RedshiftScheduledActionTargetActionResumeCluster <a name="RedshiftScheduledActionTargetActionResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

const redshiftScheduledActionTargetActionResumeCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftScheduledActionTargetActionOutputReference <a name="RedshiftScheduledActionTargetActionOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster">putPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster">putResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster">putResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster">resetPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster">resetResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster">resetResumeCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPauseCluster` <a name="putPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster"></a>

```typescript
public putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `putResizeCluster` <a name="putResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster"></a>

```typescript
public putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `putResumeCluster` <a name="putResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster"></a>

```typescript
public putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `resetPauseCluster` <a name="resetPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster"></a>

```typescript
public resetPauseCluster(): void
```

##### `resetResizeCluster` <a name="resetResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster"></a>

```typescript
public resetResizeCluster(): void
```

##### `resetResumeCluster` <a name="resetResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster"></a>

```typescript
public resetResumeCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput">pauseClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput">resizeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput">resumeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseCluster`<sup>Required</sup> <a name="pauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```typescript
public readonly pauseCluster: RedshiftScheduledActionTargetActionPauseClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `resizeCluster`<sup>Required</sup> <a name="resizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```typescript
public readonly resizeCluster: RedshiftScheduledActionTargetActionResizeClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `resumeCluster`<sup>Required</sup> <a name="resumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```typescript
public readonly resumeCluster: RedshiftScheduledActionTargetActionResumeClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `pauseClusterInput`<sup>Optional</sup> <a name="pauseClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput"></a>

```typescript
public readonly pauseClusterInput: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `resizeClusterInput`<sup>Optional</sup> <a name="resizeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput"></a>

```typescript
public readonly resizeClusterInput: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `resumeClusterInput`<sup>Optional</sup> <a name="resumeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput"></a>

```typescript
public readonly resumeClusterInput: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---


### RedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="RedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---


### RedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic">resetClassic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassic` <a name="resetClassic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic"></a>

```typescript
public resetClassic(): void
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes"></a>

```typescript
public resetNumberOfNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput">classicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">classic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classicInput`<sup>Optional</sup> <a name="classicInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput"></a>

```typescript
public readonly classicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput"></a>

```typescript
public readonly numberOfNodesInput: number;
```

- *Type:* number

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---


### RedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/provider-aws'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---



