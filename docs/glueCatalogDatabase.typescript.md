# `glueCatalogDatabase` Submodule <a name="`glueCatalogDatabase` Submodule" id="@cdktf/provider-aws.glueCatalogDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogDatabase <a name="GlueCatalogDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database aws_glue_catalog_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

new glueCatalogDatabase.GlueCatalogDatabase(scope: Construct, id: string, config: GlueCatalogDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission">putCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase">putTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission">resetCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase">resetTargetDatabase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCreateTableDefaultPermission` <a name="putCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission"></a>

```typescript
public putCreateTableDefaultPermission(value: IResolvable | GlueCatalogDatabaseCreateTableDefaultPermission[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]

---

##### `putTargetDatabase` <a name="putTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase"></a>

```typescript
public putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetCreateTableDefaultPermission` <a name="resetCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission"></a>

```typescript
public resetCreateTableDefaultPermission(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTargetDatabase` <a name="resetTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase"></a>

```typescript
public resetTargetDatabase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

glueCatalogDatabase.GlueCatalogDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission">createTableDefaultPermission</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput">createTableDefaultPermissionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTableDefaultPermission`<sup>Required</sup> <a name="createTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission"></a>

```typescript
public readonly createTableDefaultPermission: GlueCatalogDatabaseCreateTableDefaultPermissionList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a>

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueCatalogDatabaseTargetDatabaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `createTableDefaultPermissionInput`<sup>Optional</sup> <a name="createTableDefaultPermissionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput"></a>

```typescript
public readonly createTableDefaultPermissionInput: IResolvable | GlueCatalogDatabaseCreateTableDefaultPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput"></a>

```typescript
public readonly targetDatabaseInput: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogDatabaseConfig <a name="GlueCatalogDatabaseConfig" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

const glueCatalogDatabaseConfig: glueCatalogDatabase.GlueCatalogDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission">createTableDefaultPermission</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]</code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri">locationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `createTableDefaultPermission`<sup>Optional</sup> <a name="createTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission"></a>

```typescript
public readonly createTableDefaultPermission: IResolvable | GlueCatalogDatabaseCreateTableDefaultPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]

create_table_default_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `targetDatabase`<sup>Optional</sup> <a name="targetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

### GlueCatalogDatabaseCreateTableDefaultPermission <a name="GlueCatalogDatabaseCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

const glueCatalogDatabaseCreateTableDefaultPermission: glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#permissions GlueCatalogDatabase#permissions}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#permissions GlueCatalogDatabase#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal"></a>

```typescript
public readonly principal: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#principal GlueCatalogDatabase#principal}

---

### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

const glueCatalogDatabaseCreateTableDefaultPermissionPrincipal: glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}.

---

### GlueCatalogDatabaseTargetDatabase <a name="GlueCatalogDatabaseTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

const glueCatalogDatabaseTargetDatabase: glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#database_name GlueCatalogDatabase#database_name}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogDatabaseCreateTableDefaultPermissionList <a name="GlueCatalogDatabaseCreateTableDefaultPermissionList" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

new glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get"></a>

```typescript
public get(index: number): GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogDatabaseCreateTableDefaultPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>[]

---


### GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

new glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput">principalInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal"></a>

```typescript
public readonly principal: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogDatabaseCreateTableDefaultPermission | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a> | cdktf.IResolvable

---


### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

new glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```typescript
public resetDataLakePrincipalIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---


### GlueCatalogDatabaseTargetDatabaseOutputReference <a name="GlueCatalogDatabaseTargetDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/provider-aws'

new glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---



