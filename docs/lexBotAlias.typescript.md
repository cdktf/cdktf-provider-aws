# `lexBotAlias` Submodule <a name="`lexBotAlias` Submodule" id="@cdktf/provider-aws.lexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotAlias <a name="LexBotAlias" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias aws_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

new lexBotAlias.LexBotAlias(scope: Construct, id: string, config: LexBotAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs">putConversationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetConversationLogs">resetConversationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConversationLogs` <a name="putConversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs"></a>

```typescript
public putConversationLogs(value: LexBotAliasConversationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putConversationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts"></a>

```typescript
public putTimeouts(value: LexBotAliasTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>

---

##### `resetConversationLogs` <a name="resetConversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetConversationLogs"></a>

```typescript
public resetConversationLogs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

lexBotAlias.LexBotAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

lexBotAlias.LexBotAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

lexBotAlias.LexBotAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogs">conversationLogs</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference">LexBotAliasConversationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference">LexBotAliasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botNameInput">botNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersionInput">botVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogsInput">conversationLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botName">botName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersion">botVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `conversationLogs`<sup>Required</sup> <a name="conversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogs"></a>

```typescript
public readonly conversationLogs: LexBotAliasConversationLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference">LexBotAliasConversationLogsOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeouts"></a>

```typescript
public readonly timeouts: LexBotAliasTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference">LexBotAliasTimeoutsOutputReference</a>

---

##### `botNameInput`<sup>Optional</sup> <a name="botNameInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botNameInput"></a>

```typescript
public readonly botNameInput: string;
```

- *Type:* string

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersionInput"></a>

```typescript
public readonly botVersionInput: string;
```

- *Type:* string

---

##### `conversationLogsInput`<sup>Optional</sup> <a name="conversationLogsInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.conversationLogsInput"></a>

```typescript
public readonly conversationLogsInput: LexBotAliasConversationLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LexBotAliasTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a> | cdktf.IResolvable

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexBotAlias.LexBotAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasConfig <a name="LexBotAliasConfig" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

const lexBotAliasConfig: lexBotAlias.LexBotAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botName">botName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botVersion">botVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.conversationLogs">conversationLogs</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | conversation_logs block. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}.

---

##### `conversationLogs`<sup>Optional</sup> <a name="conversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.conversationLogs"></a>

```typescript
public readonly conversationLogs: LexBotAliasConversationLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

conversation_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#conversation_logs LexBotAlias#conversation_logs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#id LexBotAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LexBotAliasTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#timeouts LexBotAlias#timeouts}

---

### LexBotAliasConversationLogs <a name="LexBotAliasConversationLogs" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

const lexBotAliasConversationLogs: lexBotAlias.LexBotAliasConversationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.logSettings">logSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]</code> | log_settings block. |

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}.

---

##### `logSettings`<sup>Optional</sup> <a name="logSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs.property.logSettings"></a>

```typescript
public readonly logSettings: IResolvable | LexBotAliasConversationLogsLogSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]

log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_settings LexBotAlias#log_settings}

---

### LexBotAliasConversationLogsLogSettings <a name="LexBotAliasConversationLogsLogSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

const lexBotAliasConversationLogsLogSettings: lexBotAlias.LexBotAliasConversationLogsLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#destination LexBotAlias#destination}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_type LexBotAlias#log_type}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#resource_arn LexBotAlias#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#destination LexBotAlias#destination}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_type LexBotAlias#log_type}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#resource_arn LexBotAlias#resource_arn}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}.

---

### LexBotAliasTimeouts <a name="LexBotAliasTimeouts" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

const lexBotAliasTimeouts: lexBotAlias.LexBotAliasTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAliasConversationLogsLogSettingsList <a name="LexBotAliasConversationLogsLogSettingsList" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

new lexBotAlias.LexBotAliasConversationLogsLogSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get"></a>

```typescript
public get(index: number): LexBotAliasConversationLogsLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAliasConversationLogsLogSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]

---


### LexBotAliasConversationLogsLogSettingsOutputReference <a name="LexBotAliasConversationLogsLogSettingsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

new lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcePrefix`<sup>Required</sup> <a name="resourcePrefix" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexBotAliasConversationLogsLogSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a> | cdktf.IResolvable

---


### LexBotAliasConversationLogsOutputReference <a name="LexBotAliasConversationLogsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

new lexBotAlias.LexBotAliasConversationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings">putLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resetLogSettings">resetLogSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogSettings` <a name="putLogSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings"></a>

```typescript
public putLogSettings(value: IResolvable | LexBotAliasConversationLogsLogSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.putLogSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]

---

##### `resetLogSettings` <a name="resetLogSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.resetLogSettings"></a>

```typescript
public resetLogSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettings">logSettings</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList">LexBotAliasConversationLogsLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettingsInput">logSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logSettings`<sup>Required</sup> <a name="logSettings" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettings"></a>

```typescript
public readonly logSettings: LexBotAliasConversationLogsLogSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettingsList">LexBotAliasConversationLogsLogSettingsList</a>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `logSettingsInput`<sup>Optional</sup> <a name="logSettingsInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.logSettingsInput"></a>

```typescript
public readonly logSettingsInput: IResolvable | LexBotAliasConversationLogsLogSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsLogSettings">LexBotAliasConversationLogsLogSettings</a>[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexBotAliasConversationLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasConversationLogs">LexBotAliasConversationLogs</a>

---


### LexBotAliasTimeoutsOutputReference <a name="LexBotAliasTimeoutsOutputReference" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexBotAlias } from '@cdktf/provider-aws'

new lexBotAlias.LexBotAliasTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexBotAliasTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexBotAlias.LexBotAliasTimeouts">LexBotAliasTimeouts</a> | cdktf.IResolvable

---



