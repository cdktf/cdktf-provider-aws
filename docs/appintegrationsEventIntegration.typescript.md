# `appintegrationsEventIntegration` Submodule <a name="`appintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsEventIntegration <a name="AppintegrationsEventIntegration" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

new appintegrationsEventIntegration.AppintegrationsEventIntegration(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter">putEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEventFilter` <a name="putEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter"></a>

```typescript
public putEventFilter(value: AppintegrationsEventIntegrationEventFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput">eventbridgeBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput">eventFilterInput</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus">eventbridgeBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter"></a>

```typescript
public readonly eventFilter: AppintegrationsEventIntegrationEventFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventbridgeBusInput`<sup>Optional</sup> <a name="eventbridgeBusInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput"></a>

```typescript
public readonly eventbridgeBusInput: string;
```

- *Type:* string

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput"></a>

```typescript
public readonly eventFilterInput: AppintegrationsEventIntegrationEventFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus"></a>

```typescript
public readonly eventbridgeBus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsEventIntegrationConfig <a name="AppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

const appintegrationsEventIntegrationConfig: appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus">eventbridgeBus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus"></a>

```typescript
public readonly eventbridgeBus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter"></a>

```typescript
public readonly eventFilter: AppintegrationsEventIntegrationEventFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

### AppintegrationsEventIntegrationEventFilter <a name="AppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

const appintegrationsEventIntegrationEventFilter: appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsEventIntegrationEventFilterOutputReference <a name="AppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktf/provider-aws'

new appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppintegrationsEventIntegrationEventFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---



