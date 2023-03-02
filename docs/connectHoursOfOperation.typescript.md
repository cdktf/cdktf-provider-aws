# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktf/provider-aws.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation aws_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

new connectHoursOfOperation.ConnectHoursOfOperation(scope: Construct, id: string, config: ConnectHoursOfOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```typescript
public putConfig(value: IResolvable | ConnectHoursOfOperationConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

connectHoursOfOperation.ConnectHoursOfOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```typescript
public readonly config: ConnectHoursOfOperationConfigAList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

const connectHoursOfOperationConfig: connectHoursOfOperation.ConnectHoursOfOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | config block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```typescript
public readonly config: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}.

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

const connectHoursOfOperationConfigA: connectHoursOfOperation.ConnectHoursOfOperationConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

const connectHoursOfOperationConfigEndTime: connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

const connectHoursOfOperationConfigStartTime: connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```typescript
public putEndTime(value: ConnectHoursOfOperationConfigEndTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: ConnectHoursOfOperationConfigStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">endTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectHoursOfOperationConfigA | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a> | cdktf.IResolvable

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

new connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/provider-aws'

new connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---



