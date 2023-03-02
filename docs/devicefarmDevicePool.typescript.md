# `devicefarmDevicePool` Submodule <a name="`devicefarmDevicePool` Submodule" id="@cdktf/provider-aws.devicefarmDevicePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmDevicePool <a name="DevicefarmDevicePool" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool aws_devicefarm_device_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

new devicefarmDevicePool.DevicefarmDevicePool(scope: Construct, id: string, config: DevicefarmDevicePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig">DevicefarmDevicePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig">DevicefarmDevicePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices">resetMaxDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule"></a>

```typescript
public putRule(value: IResolvable | DevicefarmDevicePoolRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxDevices` <a name="resetMaxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices"></a>

```typescript
public resetMaxDevices(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

devicefarmDevicePool.DevicefarmDevicePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput">maxDevicesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput">projectArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices">maxDevices</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn">projectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule"></a>

```typescript
public readonly rule: DevicefarmDevicePoolRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxDevicesInput`<sup>Optional</sup> <a name="maxDevicesInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput"></a>

```typescript
public readonly maxDevicesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectArnInput`<sup>Optional</sup> <a name="projectArnInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput"></a>

```typescript
public readonly projectArnInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | DevicefarmDevicePoolRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxDevices`<sup>Required</sup> <a name="maxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices"></a>

```typescript
public readonly maxDevices: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmDevicePoolConfig <a name="DevicefarmDevicePoolConfig" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.Initializer"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

const devicefarmDevicePoolConfig: devicefarmDevicePool.DevicefarmDevicePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn">projectArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices">maxDevices</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | DevicefarmDevicePoolRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#rule DevicefarmDevicePool#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxDevices`<sup>Optional</sup> <a name="maxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices"></a>

```typescript
public readonly maxDevices: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}.

---

### DevicefarmDevicePoolRule <a name="DevicefarmDevicePoolRule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.Initializer"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

const devicefarmDevicePoolRule: devicefarmDevicePool.DevicefarmDevicePoolRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#operator DevicefarmDevicePool#operator}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#value DevicefarmDevicePool#value}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#operator DevicefarmDevicePool#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#value DevicefarmDevicePool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevicefarmDevicePoolRuleList <a name="DevicefarmDevicePoolRuleList" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

new devicefarmDevicePool.DevicefarmDevicePoolRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get"></a>

```typescript
public get(index: number): DevicefarmDevicePoolRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevicefarmDevicePoolRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>[]

---


### DevicefarmDevicePoolRuleOutputReference <a name="DevicefarmDevicePoolRuleOutputReference" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer"></a>

```typescript
import { devicefarmDevicePool } from '@cdktf/provider-aws'

new devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevicefarmDevicePoolRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a> | cdktf.IResolvable

---



