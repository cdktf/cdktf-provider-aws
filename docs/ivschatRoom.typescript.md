# `ivschatRoom` Submodule <a name="`ivschatRoom` Submodule" id="@cdktf/provider-aws.ivschatRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatRoom <a name="IvschatRoom" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

new ivschatRoom.IvschatRoom(scope: Construct, id: string, config?: IvschatRoomConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig">IvschatRoomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig">IvschatRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler">putMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers">resetLoggingConfigurationIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength">resetMaximumMessageLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond">resetMaximumMessageRatePerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler">resetMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMessageReviewHandler` <a name="putMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler"></a>

```typescript
public putMessageReviewHandler(value: IvschatRoomMessageReviewHandler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts"></a>

```typescript
public putTimeouts(value: IvschatRoomTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfigurationIdentifiers` <a name="resetLoggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers"></a>

```typescript
public resetLoggingConfigurationIdentifiers(): void
```

##### `resetMaximumMessageLength` <a name="resetMaximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength"></a>

```typescript
public resetMaximumMessageLength(): void
```

##### `resetMaximumMessageRatePerSecond` <a name="resetMaximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond"></a>

```typescript
public resetMaximumMessageRatePerSecond(): void
```

##### `resetMessageReviewHandler` <a name="resetMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler"></a>

```typescript
public resetMessageReviewHandler(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

ivschatRoom.IvschatRoom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

ivschatRoom.IvschatRoom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

ivschatRoom.IvschatRoom.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput">loggingConfigurationIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput">maximumMessageLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput">maximumMessageRatePerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput">messageReviewHandlerInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength">maximumMessageLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `messageReviewHandler`<sup>Required</sup> <a name="messageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler"></a>

```typescript
public readonly messageReviewHandler: IvschatRoomMessageReviewHandlerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts"></a>

```typescript
public readonly timeouts: IvschatRoomTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingConfigurationIdentifiersInput`<sup>Optional</sup> <a name="loggingConfigurationIdentifiersInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput"></a>

```typescript
public readonly loggingConfigurationIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `maximumMessageLengthInput`<sup>Optional</sup> <a name="maximumMessageLengthInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput"></a>

```typescript
public readonly maximumMessageLengthInput: number;
```

- *Type:* number

---

##### `maximumMessageRatePerSecondInput`<sup>Optional</sup> <a name="maximumMessageRatePerSecondInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput"></a>

```typescript
public readonly maximumMessageRatePerSecondInput: number;
```

- *Type:* number

---

##### `messageReviewHandlerInput`<sup>Optional</sup> <a name="messageReviewHandlerInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput"></a>

```typescript
public readonly messageReviewHandlerInput: IvschatRoomMessageReviewHandler;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IvschatRoomTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingConfigurationIdentifiers`<sup>Required</sup> <a name="loggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers"></a>

```typescript
public readonly loggingConfigurationIdentifiers: string[];
```

- *Type:* string[]

---

##### `maximumMessageLength`<sup>Required</sup> <a name="maximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength"></a>

```typescript
public readonly maximumMessageLength: number;
```

- *Type:* number

---

##### `maximumMessageRatePerSecond`<sup>Required</sup> <a name="maximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond"></a>

```typescript
public readonly maximumMessageRatePerSecond: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatRoomConfig <a name="IvschatRoomConfig" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

const ivschatRoomConfig: ivschatRoom.IvschatRoomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength">maximumMessageLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfigurationIdentifiers`<sup>Optional</sup> <a name="loggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers"></a>

```typescript
public readonly loggingConfigurationIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `maximumMessageLength`<sup>Optional</sup> <a name="maximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength"></a>

```typescript
public readonly maximumMessageLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `maximumMessageRatePerSecond`<sup>Optional</sup> <a name="maximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond"></a>

```typescript
public readonly maximumMessageRatePerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `messageReviewHandler`<sup>Optional</sup> <a name="messageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler"></a>

```typescript
public readonly messageReviewHandler: IvschatRoomMessageReviewHandler;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IvschatRoomTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}

---

### IvschatRoomMessageReviewHandler <a name="IvschatRoomMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

const ivschatRoomMessageReviewHandler: ivschatRoom.IvschatRoomMessageReviewHandler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult">fallbackResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}. |

---

##### `fallbackResult`<sup>Optional</sup> <a name="fallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult"></a>

```typescript
public readonly fallbackResult: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}.

---

### IvschatRoomTimeouts <a name="IvschatRoomTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

const ivschatRoomTimeouts: ivschatRoom.IvschatRoomTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatRoomMessageReviewHandlerOutputReference <a name="IvschatRoomMessageReviewHandlerOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

new ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult">resetFallbackResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFallbackResult` <a name="resetFallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult"></a>

```typescript
public resetFallbackResult(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput">fallbackResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult">fallbackResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fallbackResultInput`<sup>Optional</sup> <a name="fallbackResultInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput"></a>

```typescript
public readonly fallbackResultInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `fallbackResult`<sup>Required</sup> <a name="fallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult"></a>

```typescript
public readonly fallbackResult: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IvschatRoomMessageReviewHandler;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---


### IvschatRoomTimeoutsOutputReference <a name="IvschatRoomTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer"></a>

```typescript
import { ivschatRoom } from '@cdktf/provider-aws'

new ivschatRoom.IvschatRoomTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IvschatRoomTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a> | cdktf.IResolvable

---



